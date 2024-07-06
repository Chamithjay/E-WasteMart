import react from 'react';
import './css/Hero.css';
import 'bootstrap/dist/css/bootstrap.css';
import bg from './Images/background.jpeg';
import E1 from './Images/E1.jpg';
import E2 from './Images/E2.jpg';
import E3 from './Images/E3.jpg';
import E4 from './Images/E4.jpg';


function Hero(){
    return(
      <div className="hero" style={{ backgroundColor:'#00230B'}}>
      <div className="hero-content">
          <div className="hero-text">
              <h1 id='text' data-fill-text='RECYCLING'>RECYCLING E-WASTE</h1>
              <p>DON'T WASTE YOUR TECH. RECYCLE, REBUILD, RESELL.</p>
          <div>
              <a href="#purchase" className="btn btn-light">Purchase</a>
              <a href="#selling" className="btn btn-light">Selling</a>
          </div>
      </div>
      <div className="bento-grid">
    <div className="bento-item ">
      <img src={E1}  />

    </div>
    <div className="bento-item medium">
      <img src={E4} />

    </div>
    <div className="bento-item medium">
      <img src={E3}alt />

    </div>
    <div className="bento-item">
      <img src={E2}  />
 
    </div>
    
  </div>
  </div>
</div>
    )
}

export default Hero