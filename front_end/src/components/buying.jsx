import react from 'react';
import './css/buying.css';
import 'bootstrap/dist/css/bootstrap.css';
import Nav from './navbar';
import ItemCard from './itemCard';
import data from './data';
import Cart from './cart';
import Filters from './filters';

function Buying(){
    return( 
        <>
        <Nav/> 
        <Filters/>
        <Cart/>            
        <div className='buying'>
            <div className="row">
                <div className="cardContainer">
                    {data.products.map((item,index)=>{
                        while(index<4){
                        return(
                            <ItemCard key={index}img={item.img}title={item.name}description={item.description}price={item.price}item={item}/>
                        );}
                    })}
                                            
                </div>
            </div>
            <div className="row">
                <div className="cardContainer">
                    {data.products.map((item,index)=>{
                        while(index>=4 && index<8){
                        return(
                            <ItemCard key={index}img={item.img}title={item.name}description={item.description}price={item.price} item={item}/>
                        );}
                    })}
                                            
                </div>
            </div>
        </div>
      
        </>   
        
    );
}
export default Buying;