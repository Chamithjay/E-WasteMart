import react from 'react';
import './css/hero.css';
import 'bootstrap/dist/css/bootstrap.css';


function Hero(){
    return(
        <div className="hero">
          <div id ="text">
          <h1>RECYCLING E-WASTE</h1>
          <p>DON'T WASTE YOUR TECH. RECYCLE, REBUILD, RESELL. </p>

          </div>
          
          <div id='buttons'>
            <a href="#features" className="btn btn-light">Purchase</a>
            <a href="#learn-more" className="btn btn-light">Selling</a>
          </div>
          <div className="bento-grid">
            <div className="bento-item">
              <img src="https://via.placeholder.com/150" alt="Item 1" />
              <h3>Item 1</h3>
            </div>
            <div className="bento-item">
              <img src="https://via.placeholder.com/150" alt="Item 2" />
              <h3>Item 2</h3>
            </div>
            <div className="bento-item">
              <img src="https://via.placeholder.com/150" alt="Item 3" />
              <h3>Item 3</h3>
            </div>
            <div className="bento-item">
              <img src="https://via.placeholder.com/150" alt="Item 4" />
              <h3>Item 4</h3>
            </div>
          </div>
        </div>
    )
}

export default Hero