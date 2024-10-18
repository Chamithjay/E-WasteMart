import React from 'react';
import { useCart } from 'react-use-cart';
import './css/itemCard.css';

const ItemCard = (props) => {
    const { addItem } = useCart();

    return (
        <div className="card">
            <div className="image">
                <img src={props.img} alt={props.title} />
            </div>
            <div className="caption">
                <h3 className="product_name heading">{props.title}</h3>
                <p className="description text">{props.description}</p>
                <h4 className="price heading"><b>{props.price}</b></h4>
            </div>
            <button className="heading" onClick={() => addItem(props.item)}>Add to Cart</button>
        </div>
    );
};

export default ItemCard;
