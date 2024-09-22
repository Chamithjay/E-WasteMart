import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import './css/sign_up.css';
import Nav from "./navbar.jsx";
import axios from 'axios';
import Back from './Images/SignUp.jpg';


function SignUp() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    // Handle form field changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Check if password matches confirm password
        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        try {
            // Send the form data to the backend
            const response = await axios.post('http://localhost:5000/signup', {
                name: formData.name,
                email: formData.email,
                password: formData.password,
                confirmPassword: formData.confirmPassword
            });

            if (response.status === 201) {
              // Redirect to login page after successful registration
              window.location.href = '/login'; // Using href for redirect
          } else {
              setError(response.data.message);
          }
        } catch (err) {
            setError('Error signing up.');
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
                        {error && <p style={{color: 'red'}}>{error}</p>}
                        <div className="form-group">
                            <label htmlFor="Name">Full Name:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="Name"
                                placeholder="Enter name"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="Email">Email:</label>
                            <input
                                type="email"
                                className="form-control"
                                id="Email"
                                placeholder="Enter email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="Pwd">Password:</label>
                            <input
                                type="password"
                                className="form-control"
                                id="Pwd"
                                placeholder="Enter password"
                                name="password"
                                value={formData.password}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="CPwd">Confirm Password:</label>
                            <input
                                type="password"
                                className="form-control"
                                id="CPwd"
                                placeholder="Enter password"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleInputChange}
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
