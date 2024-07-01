import react from 'react';
import Nav from './navbar.jsx';
import 'bootstrap/dist/css/bootstrap.css';
import Hero from './hero.jsx';
import Selling from './selling.jsx';

function Home(){
    return(
        <div>
            <Nav />
           
            <Selling />   
            
            
            
        </div>
    )
}
export default Home