import React, { useState } from 'react';
import './css/Filter.css'; // Import the CSS file

const Filter = ({ conditions, types, onFilterChange }) => {
  const [selectedCondition, setSelectedCondition] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [priceRange, setPriceRange] = useState([0, 1000]);

  const handleConditionChange = (e) => {
    setSelectedCondition(e.target.value);
    onFilterChange(e.target.value, selectedType, priceRange);
  };

  const handleTypeChange = (e) => {
    setSelectedType(e.target.value);
    onFilterChange(selectedCondition, e.target.value, priceRange);
  };

  const handlePriceChange = (e) => {
    const value = e.target.value.split(',');
    const range = [parseInt(value[0]), parseInt(value[1])];
    setPriceRange(range);
    onFilterChange(selectedCondition, selectedType, range);
  };

  return (
    <div className="filter-container">
      <h2>Filter Products</h2>
      <div className="filter-group">
        <label>Condition: </label>
        <select className="filter-select" value={selectedCondition} onChange={handleConditionChange}>
          <option value="">All</option>
          {conditions.map((condition, index) => (
            <option key={index} value={condition}>{condition}</option>
          ))}
        </select>
      </div>
      <div className="filter-group">
        <label>Type: </label>
        <select className="filter-select" value={selectedType} onChange={handleTypeChange}>
          <option value="">All</option>
          {types.map((type, index) => (
            <option key={index} value={type}>{type}</option>
          ))}
        </select>
      </div>
      <div className="filter-group">
        <label>Price Range: </label>
        <select className="filter-select" onChange={handlePriceChange}>
          <option value={[0, 1000]}>All</option>
          <option value={[0, 100]}>0 - 100</option>
          <option value={[100, 500]}>100 - 500</option>
          <option value={[500, 1000]}>500 - 1000</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
