import React from 'react';

const Filters = ({ filters, setFilters }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value
    });
  };

  return (
    <div className="filters">
      <select name="category" value={filters.category} onChange={handleChange}>
        <option value="">Select Category</option>
        <option value="Phone">Phone</option>
        <option value="Laptop">Laptop</option>
     <option value="Phone">Phone</option>
        <option value="Laptop">Laptop</option>
     <option value="Phone">Phone</option>
        <option value="Laptop">Laptop</option>
       
      </select>

      <select name="company" value={filters.company} onChange={handleChange}>
        <option value="">Select Company</option>
        <option value="AMZ">Amazon</option>
        <option value="FLP">Flipkart</option>
     <option value="AMZ">Amazon</option>
        <option value="FLP">Flipkart</option>
     <option value="AMZ">Amazon</option>
        <option value="FLP">Flipkart</option>
       
      </select>
    

      <input
        type="number"
        name="minPrice"
        value={filters.minPrice}
        onChange={handleChange}
        placeholder="Min Price"
      />

      <input
        type="number"
        name="maxPrice"
        value={filters.maxPrice}
        onChange={handleChange}
        placeholder="Max Price"
      />

      <input
        type="number"
        name="rating"
        value={filters.rating}
        onChange={handleChange}
        placeholder="Rating"
        min="0"
        max="5"
        step="0.1"
      />

      <select name="availability" value={filters.availability} onChange={handleChange}>
        <option value="">Select Availability</option>
        <option value="yes">In Stock</option>
        <option value="out-of-stock">Out of Stock</option>
      </select>
    </div>
  );
};

export default Filters;
