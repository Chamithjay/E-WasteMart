import react from 'react';
import './css/Hero.css';
import 'bootstrap/dist/css/bootstrap.css';
import Cloud from './cloud';
import back from './Images/heroback.png';


function Hero(){
    return(
      <div className="hero" style={{ backgroundColor:'#77B0AA'}}>
        <div className="hero-overlay">
            <img src={back} alt="hero" />
        </div>
        <div className="hero-section">
            <Cloud className="cloud-1" />
            <Cloud className="cloud-2" />
        </div>
        <div className="hero-content">
            <div className="hero-text">
                <h1 id='text' data-fill-text='RECYCLING'>RECYCLING E-WASTE</h1>
                <p>DON'T WASTE YOUR TECH. RECYCLE, REBUILD, RESELL.</p>
                <div>
                    <a href="#purchase" className="btn btn-light">Purchase</a>
                    <a href="#selling" className="btn btn-light">Selling</a>
                </div>  
            </div>
        </div>
    </div>
    )
}

export default Hero