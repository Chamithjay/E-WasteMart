import react, {useState} from 'react';
import './css/cards_home.css';
import 'bootstrap/dist/css/bootstrap.css';
import { FaShoppingCart, FaRegBookmark, FaStar, FaFireAlt } from 'react-icons/fa';
import img1 from './Images/phone.jpg';
import img2 from './Images/mac.jpg';
import img3 from './Images/air.jpg';
import seeMore from './Images/seemore.svg';
import Buying from './buying';

function Cards_home() {
    return (
        <div className='productList'>
            <h1>Top Products</h1>
            <hr className=" hr" /> 
            <div className="row">
                <div className="cardContainer">
                    <div className="card">
                        <div className="image">
                            <img src={img1} alt="image"/>
                        </div>
                        <div className="caption">
                            <h3 className="product_name heading">Iphone</h3>
                            <p className="description text">Display not working. Everything else is fine.Good condition</p>
                            <h4 className="price-heading"><b>Rs.20000</b></h4>
                        </div>
                        <button className="heading">Add to cart</button>
                    </div>
                    <div className="card">
                        <div className="image">
                            <img src={img2} alt="image"/>
                        </div>
                        <div className="caption">
                            <h3 className="product_name heading">MacBook Pro</h3>
                            <p className="description text">Display & Touch pad not working. Other hardware is good.</p>
                            <h4 className="price-heading"><b>Rs.85000</b></h4>
                        </div>
                        <button className="heading">Add to cart</button>
                    </div>
                    <div className="card">
                        <div className="image">
                            <img src={img3} alt="image"/>
                        </div>
                        <div className="caption">
                            <h3 className="product_name heading">Air pods(Gen 1)</h3>
                            <p className="description text">Battery not working.Speakers are in good condition.</p>
                            <h4 className="price-heading"><b>Rs.15000</b></h4>
                        </div>
                        <button className="heading">Add to cart</button>
                    </div>
                </div>
            </div>
            <a href='/buying'><button className='seeMore'><img src={seeMore}/>See More</button></a>
        </div>


    );
}
export default Cards_home;
