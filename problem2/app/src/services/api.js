import axios from 'axios';

const url = 'http://20.244.56.144/test/companies';
const t = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzIwMjQzODk2LCJpYXQiOjE3MjAyNDM1OTYsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImU1OWE4NmE3LTQ0YWMtNGJhYS05NTQzLTM4MzA4YmQ1ODQzNCIsInN1YiI6Inlhc2h5YXNoNTE3QG1nYWlsLmNvbSJ9LCJjb21wYW55TmFtZSI6ImdvTWFydCIsImNsaWVudElEIjoiZTU5YTg2YTctNDRhYy00YmFhLTk1NDMtMzgzMDhiZDU4NDM0IiwiY2xpZW50U2VjcmV0IjoiU2pNelNYeGNPdUFUVkRSRCIsIm93bmVyTmFtZSI6Illhc2h3YW50aCBLdW1hciBBIE0iLCJvd25lckVtYWlsIjoieWFzaHlhc2g1MTdAbWdhaWwuY29tIiwicm9sbE5vIjoiNFZWMjFDSTA2MSJ9.syr8o6tUnuPMDcJJESCeu7fq2FnoYAjQOyS1X65nKRg";

export const fetchProducts = async (company, category, top, minPrice, maxPrice, token) => {
  try {
    const response = await axios.get(`${url}/${company}/categories/${category}/products`, {
      params: {
        top,
        minPrice,
        maxPrice
      },
      headers: {
        Authorization: `Bearer ${t}`      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};
