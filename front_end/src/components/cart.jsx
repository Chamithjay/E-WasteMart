import React from 'react';
import { useCart } from 'react-use-cart';

import 'bootstrap/dist/css/bootstrap.css';

const Cart = () => {
    const {
        isEmpty,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart
    } = useCart();

    if (isEmpty) return <h2 className="heading">Your cart is empty</h2>;

    return (
        <div className="cart-container">
            <h2 className="heading">Shopping Cart</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item, index) => (
                        <tr key={index}>
                            <td>{item.title}</td>
                            <td>
                                <button
                                    className="btn btn-sm btn-primary"
                                    onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                                >
                                    -
                                </button>
                                <span className="quantity">{item.quantity}</span>
                                <button
                                    className="btn btn-sm btn-primary"
                                    onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                                >
                                    +
                                </button>
                            </td>
                            <td>{item.price}</td>
                            <td>
                                <button
                                    className="btn btn-sm btn-danger"
                                    onClick={() => removeItem(item.id)}
                                >
                                    Remove
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="cart-summary">
                <h4>Total Items: {totalItems}</h4>
                <h4>Total Price: ${cartTotal}</h4>
            </div>
            <button className="btn btn-danger" onClick={() => emptyCart()}>
                Clear Cart
            </button>
            <button className="btn btn-success" onClick={() => alert('Proceeding to checkout...')}>
                Checkout
            </button>
        </div>
    );
};

export default Cart;
