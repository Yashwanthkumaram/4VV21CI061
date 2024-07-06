const express = require('express');
const app = express();
const port = 1170;

app.use(express.json());

app.post('/numbers', (req, res) => {
    const numbers = req.body;

    if (!Array.isArray(numbers) || numbers.some(isNaN)) {
        return res.status(400);
    }

    if (numbers.length === 0) {
        return res.status(400);
    }

    const sum = numbers.reduce((acc, num) => acc + num, 0);
    const average = sum / numbers.length;

    res.json({ average });
});

app.listen(port);
