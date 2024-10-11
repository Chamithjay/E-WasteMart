import 'bootstrap/dist/css/bootstrap.css';
import './css/login.css'
import Nav from "./navbar.jsx";
import Back from './Images/SignUp.jpg'
import axios from 'axios';
import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [apiError, setApiError] = useState(null);
    const navigate = useNavigate(); 

    const handleSubmit = async (e) => {
        e.preventDefault();
       
        setApiError('');   

    
        try {
            const response = await axios.post('http://localhost:3000/login', {
              email,
              password
            });
            if (response.status === 201) { // Check if the signup is successful
              navigate('/'); // Redirect to login page after successful signup
            }
      
            
          } catch (error) {
            setApiError('There was an error login in, please try again.');
          }
        };



    return(
        <div>
            <Nav />
            <div style={{ backgroundImage:`url(${Back})`, height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' ,backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>
                
                <div className="container  ">
                
                    {/* change the form action to the correct path */}
                    <form onSubmit={handleSubmit}> 
                        <h2>Login</h2>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input type="email" className="form-control" id="email" placeholder="Enter email" name="email"value={email}
                  onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="pwd">Password:</label>
                            <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pswd"value={password}
                  onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                        <button type="submit" className="btn btn-primary">Login</button>

                    </form>
                    <div id='log'>
                        <p>If you does't hava an account</p>
                        <a href="/sign_up">Sign Up</a>
                    </div>                
                </div>

            </div>
        </div>
    )
}

export default Login