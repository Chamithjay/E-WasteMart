import react from 'react';
import './css/buying.css';
import 'bootstrap/dist/css/bootstrap.css';
import Nav from './navbar';
import ItemCard from './itemCard';
import data from './data';
import Cart from './cart';
import React, { useState } from 'react';// Make sure you have a data file with products
import Filter from './filters';
import Footer from './footer.jsx';


const Buying = () => {
  const [filteredProducts, setFilteredProducts] = useState(data.products);

  const conditions = [...new Set(data.products.map(product => product.condition))];
  const types = [...new Set(data.products.map(product => product.type))]; // Assuming you have a 'type' field in your product data

  const handleFilterChange = (condition, type, priceRange) => {
    let filtered = data.products;
    if (condition) {
      filtered = filtered.filter(product => product.condition === condition);
    }
    if (type) {
      filtered = filtered.filter(product => product.type === type);
    }
    filtered = filtered.filter(product => product.price >= priceRange[0] && product.price <= priceRange[1]);
    setFilteredProducts(filtered);
  };

  return (
    <>
      <Nav />
      <Cart />
      <Filter conditions={conditions} types={types} onFilterChange={handleFilterChange} />
      <div className='buying'>
        <div className="row">
          <div className="cardContainer">
            {filteredProducts.slice(0, 4).map((item, index) => (
              <ItemCard key={index} img={item.img} title={item.name} description={item.description} price={item.price} item={item} />
            ))}
          </div>
        </div>
        <div className="row">
          <div className="cardContainer">
            {filteredProducts.slice(4, 8).map((item, index) => (
              <ItemCard key={index} img={item.img} title={item.name} description={item.description} price={item.price} item={item} />
            ))}
          </div>
        </div>
        <div className="row">
          <div className="cardContainer">
            {filteredProducts.slice(8, 12).map((item, index) => (
              <ItemCard key={index} img={item.img} title={item.name} description={item.description} price={item.price} item={item} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Buying;
