import React, { useState, useEffect } from 'react';
import { fetchProducts } from '../services/api';
import ProductCard from '../components/prodeutcard';
import Filters from '../components/filters';
import Pagination from '../components/paginstion';

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({ category: '', company: '', rating: 0, minPrice: 0, maxPrice: 10000, availability: '' });
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchProducts(filters.company, filters.category, 10, filters.minPrice, filters.maxPrice);
        setProducts(response);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [filters, page]);

  return (
    <div>
      <Filters filters={filters} setFilters={setFilters} />
      <div className="product-list">
        {products.map(product => (
          <ProductCard key={product.productId} product={product} />
        ))}
      </div>
      <Pagination page={page} setPage={setPage} />
    </div>
  );
};

export default AllProducts;
