import react from 'react';
import Nav from './navbar.jsx';
import 'bootstrap/dist/css/bootstrap.css';

function Home(){
    return(
        <div>
            <Nav />
            <h1>Home</h1>
            <a href='/sign_up'>Sign Up</a>
            
        </div>
    )
}
export default Home