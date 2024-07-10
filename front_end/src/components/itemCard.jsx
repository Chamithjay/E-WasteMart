import react from 'react';
import './css/itemCard.css';
import 'bootstrap/dist/css/bootstrap.css';

const ItemCard=(props)=>{
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
                        <button className="heading">Add to cart</button>
                    </div>


        </div>
    );
};

export default ItemCard;