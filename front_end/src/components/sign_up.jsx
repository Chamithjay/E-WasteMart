import react from 'react'
import {useNavigate} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import './css/sign_up.css'
import Nav from "./navbar.jsx";
import axios from 'axios';
import Back from './Images/SignUp.jpg'

function SignUp(){
      
    return(
        <div >
            <Nav />
            <div style={{ backgroundImage:`url(${Back})`, height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' ,backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>
              
            <div className="container">
          
                  {/* change the form action to the correct path */}
                  <form > 
                    <h2>Sign Up</h2>
                    <div className="form-group">
                        <label htmlFor="Name">Full Name:</label>
                        <input type="text" className="form-control" id="Name" placeholder="Enter name" name="Name" required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="Email">Email:</label>
                        <input type="email" className="form-control" id="Email" placeholder="Enter email" name="Email"  required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="Pwd">Password:</label>
                        <input type="password" className="form-control" id="Pwd" placeholder="Enter password" name="Pwd" required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="CPwd">Confirm Password:</label>
                        <input type="password" className="form-control" id="CPwd" placeholder="Enter password" name="CPwd" required/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>

                </form>
                <div id='log'>
                    <p>If you already hava an account</p>
                    <a href="/login">Login</a>
                </div>                
            </div>

        </div>
        </div>
        
    )
}

export default SignUp