import react from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './css/navbar.css'
import  search from'./Images/search.svg'
import trash from './Images/trash.png'


function Nav(){
    
    return(        
        <nav className="navbar navbar-expand-lg ">
        <img id ='trash'src={trash} alt="Logo" style={{ width: '30px', height: '30px' }} />
        <a className="navbar-brand" href="#">E-Waste Mart</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="/buying">Buying</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/selling">Selling</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About</a>
            </li>
            <li className="nav-item">
<<<<<<< HEAD
              <a className="nav-link" href="#">Q&A</a>
=======
              <a className="nav-link" href="/QnA">QnA</a>
>>>>>>> c6a25391007b278941fbc5e3c4dce9ed64ecc3b0
            </li>
          </ul>
          <form className="d-flex me-3">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit"><img src={search}/></button>
          </form>
          <div className="d-flex align-items-center">
            <a ></a>
            <a className="nav-btn"     href='/sign_up'>Sign Up</a>
          </div>
        </div>
      </nav>
    );
    
}

export default Nav
