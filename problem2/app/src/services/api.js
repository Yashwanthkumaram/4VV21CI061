import axios from 'axios';

const url = 'http://20.244.56.144/test/companies';

export const fetchProducts = async (company, category, top, minPrice, maxPrice) => {
  
    const response = await axios.get(`${url}/${company}/categories/${category}/products`, {
      params: {
        top,
        minPrice,
        maxPrice
      }
    });
    return response.data; 
};
