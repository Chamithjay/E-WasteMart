import react from 'react';
import Nav from './navbar.jsx';
import 'bootstrap/dist/css/bootstrap.css';
import Hero from './hero.jsx';
import Selling from './selling.jsx';
import Cards_home from './cards_home.jsx';
import Footer from './footer.jsx';

function Home(){
    return(
        <div>
            <Nav />         
            <Hero />
            <Footer />
            
            
            
        </div>
    )
}
export default Home