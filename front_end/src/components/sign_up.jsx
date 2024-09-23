import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './css/sign_up.css';
import Nav from "./navbar.jsx";
import axios from 'axios';
import Back from './Images/SignUp.jpg';



const SignUp = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3000/signup', {
        fullName,
        email,
        password
      });

      alert(response.data);
    } catch (error) {
      console.error('There was an error signing up:', error);
    }
  };

    return (
        <div>
            <Nav />
            <div style={{
                backgroundImage: `url(${Back})`, 
                height: '100vh', 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center',
                backgroundRepeat: 'repeat-x', 
                backgroundSize: 'cover'
            }}>
                <div className="container">
                    <form id="signUpForm" onSubmit={handleSubmit}>
                        <h2>Sign Up</h2>
                        <div className="form-group">
                        <label>Full Name:</label>
                            <input
                            type="text"
                            className="form-control"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            required
                            />
                        </div>
                        <div className="form-group">
                        <label>Email:</label>
                            <input
                                type="email"
                                className="form-control"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                        <label>Password:</label>
                            <input
                                type="password"
                                className="form-control"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                        <label>Confirm Password:</label>
                            <input
                                type="password"
                                className="form-control"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                    <div id='log'>
                        <p>If you already have an account</p>
                        <a href="/login">Login</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
