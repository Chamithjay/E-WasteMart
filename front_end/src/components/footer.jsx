import react from 'react';
import './css/footer.css';
import 'bootstrap/dist/css/bootstrap.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import trash from './Images/trash.png'

function Footer(){
    return(
        <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="footer-logo">
            <img id ='trash'src={trash} alt="Logo" style={{ width: '30px', height: '30px' }} />
              <h4>E-WASTEMART</h4>
            </div>
            <p>©  E-WASTEMART. All rights reserved.</p>
          </div>
          <div className="col-md-3">
            <h5>Links</h5>
            <ul className="footer-links">
              <li><a href="#about">About Us</a></li>
              <li><a href="#contact">Contact Us</a></li>
              <li><a href="#policy">Privacy policy</a></li>
            

            </ul>
          </div>
          <div className="col-md-3">
            <h5>Contact</h5>
            <div className="contact-info">
              <p>Email: info@yourbrand.com</p>
              <p>Phone: (123) 456-7890</p>
            </div>
            </div>
          <div className="col-md-3">
            <h5>Follow Us</h5>
            <ul className="footer-social">
              <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a></li>
              <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a></li>
              <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a></li>
              <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a></li>
            </ul>
          </div>
        </div>
        
      </div>
     <hr className=" hr" /> 
    </footer>
    )
}

export default Footer
    