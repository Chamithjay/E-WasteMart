import react from 'react';
import './css/itemCard.css';
import 'bootstrap/dist/css/bootstrap.css';
import {useCart} from 'react-use-cart';

const ItemCard=(props)=>{
    const {addItem}=useCart();
    return(
        <div>
            <div className="card">
                        <div className="image">
                            <img src={props.img} alt="image"/>
                        </div>
                        <div className="caption">
                            <h3 className="product_name heading">{props.title}</h3>
                            <p className="description text">{props.description}</p>
                            <h4 className="price heading"><b>{props.price}</b></h4>
                        </div>
                        <button className="heading" onClick={()=>addItem(props.item)}>Add to cart</button>
                    </div>


        </div>
    );
};

export default ItemCard;