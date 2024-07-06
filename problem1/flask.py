from flask import Flask, request, jsonify
import requests
import time
import threading

app = Flask(__name__)

WindowSize = 10
NApi = {
    'p': 'http://20.244.56.144/test/primes',
    'f': 'http://20.244.56.144/test/fibo',
    'e': 'http://20.244.56.144/test/even',
    'r': 'http://20.244.56.144/test/rand'
}

state = {
    'numbers': [],
    'lock': threading.Lock()
}

def fetch_numbers(number_type):
    if number_type not in NApi:
        return []

    url = NApi[number_type]
    try:
        response = requests.get(url, timeout=0.5)
        response.raise_for_status()
        data = response.json()
        return data.get('numbers', [])
    except (requests.exceptions.RequestException, ValueError):
        return []

def calculate_average(numbers):
    if not numbers:
        return 0.0
    return sum(numbers) / len(numbers)

@app.route('/numbers/<number_type>', methods=['GET'])
def get_numbers(number_type):
    with state['lock']:
        prev_state = list(state['numbers'])

    new_numbers = fetch_numbers(number_type)
    unique_numbers = list(set(new_numbers))

    with state['lock']:
        current_numbers = state['numbers'] + unique_numbers
        current_numbers = list(dict.fromkeys(current_numbers))  # Remove duplicates while preserving order
        if len(current_numbers) > WindowSize:
            current_numbers = current_numbers[-WindowSize:]
        state['numbers'] = current_numbers
        curr_state = list(state['numbers'])

    avg = calculate_average(curr_state)

    response = {
        "windowPrevState": prev_state,
        "windowCurrState": curr_state,
        "numbers": unique_numbers,
        "avg": avg
    }

    return jsonify(response)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=9876)
