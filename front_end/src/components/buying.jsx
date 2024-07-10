import react from 'react';
import './css/buying.css';
import 'bootstrap/dist/css/bootstrap.css';
import Nav from './navbar';
import ItemCard from './itemCard';
import data from './data';

function Buying(){
    return( 
        <div>
        <Nav/>              
        <div className='buying'>
            <div className="row">
                <div className="cardContainer">
                    {data.products.map((item,index)=>{
                        while(index<4){
                        return(
                            <ItemCard key={index}img={item.img}title={item.name}description={item.description}price={item.price}
                            />
                        );}
                    })}
                                            
                </div>
            </div>
            <div className="row">
                <div className="cardContainer">
                    {data.products.map((item,index)=>{
                        while(index>=4 && index<8){
                        return(
                            <ItemCard key={index}img={item.img}title={item.name}description={item.description}price={item.price}
                            />
                        );}
                    })}
                                            
                </div>
            </div>
        </div>
    </div>   
    );
}
export default Buying