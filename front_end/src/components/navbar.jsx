import react from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './css/navbar.css'

function Nav(){
    return(
        <nav className="navbar navbar-expand-lg navbar-light ">
            <a className="navbar-brand" href="/">Home</a>
            <a className="navbar-brand" href="/login">Login</a>
            <a className="navbar-brand" href="/sign_up">Sign Up</a>
            <a className="navbar-brand" href="/selling">Selling</a>
        </nav>
    )
}

export default Nav
