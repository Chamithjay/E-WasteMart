import react from 'react';
import './css/Hero.css';
import 'bootstrap/dist/css/bootstrap.css';
import Cloud from './cloud';
import building from './Images/building.png';
import lorry from './Images/trashLorry.png';



function Hero(){
    return(
      <div className="hero" style={{ backgroundColor:'#77B0AA'}}>
        <div className="hero-buildings">
            <img src={building} alt="hero" />
        </div>
        <div className="hero-overlay">
            <img src={lorry} alt="hero" />
        </div>
    
        <div className="hero-section">
            <Cloud className="cloud-1" />
            <Cloud className="cloud-2" />
        </div>
        <div className="hero-content">
            <div className="hero-text">
                <h1 id='text' >Don't Trash It. Recycle It</h1>
                <p><b>DON'T WASTE YOUR TECH. RECYCLE, REBUILD, RESELL.</b></p>
                <div className='hero-btn'>
                    <a href="#purchase" className="btn btn-light">Purchase</a>
                    <a href="#selling" className="btn btn-light">Selling</a>
                </div>  
            </div>
        </div>
    </div>
    )
}

export default Hero