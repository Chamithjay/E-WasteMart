import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ItemCard from './itemCard';

const data = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Fetch product data from the backend
        axios.get('http://localhost:3000/product') // Adjust the URL if necessary
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the data!', error);
            });
    }, []);

    return (
        <div className="product-list">
            {products.map(product => (
                <ItemCard
                    key={product.id}
                    item={product}
                    img={product.img}
                    title={product.name}
                    description={product.description}
                    price={product.price}
                />
            ))}
        </div>
    );
};

export default data;
