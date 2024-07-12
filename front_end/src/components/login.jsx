import react from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './css/login.css'
import Nav from "./navbar.jsx";
import Back from './Images/SignUp.jpg'

function Login(){
    return(
        <div>
            <Nav />
            <div style={{ backgroundImage:`url(${Back})`, height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' ,backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>
                
                <div className="container  ">
                
                    {/* change the form action to the correct path */}
                    <form> 
                        <h2>Login</h2>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input type="email" className="form-control" id="email" placeholder="Enter email" name="email"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="pwd">Password:</label>
                            <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pswd"/>
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