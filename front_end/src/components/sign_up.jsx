import react from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './css/sign_up.css'

function SignUp(){
    return(
        <div style={{ backgroundColor: '#7AB2B2', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div className="container  ">
                  {/* change the form action to the correct path */}
                  <form> 
                    <h2>Sign Up</h2>
                    <div className="form-group">
                        <label for="name">Full Name:</label>
                        <input type="text" className="form-control" id="name" placeholder="Enter name" name="name"/>
                    </div>
                    <div className="form-group">
                        <label for="email">Email:</label>
                        <input type="email" className="form-control" id="email" placeholder="Enter email" name="email"/>
                    </div>
                    <div className="form-group">
                        <label for="pwd">Password:</label>
                        <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pswd"/>
                    </div>
                    <div className="form-group">
                        <label for="pwd">Confirm Password:</label>
                        <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pswd"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>

                </form>
                <div id='log'>
                    <p>If you already hava an account</p>
                    <a href="/login">Login</a>
                </div>                
            </div>

        </div>
    )
}

export default SignUp