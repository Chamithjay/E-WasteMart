import react from 'react';
import './css/filters.css';
import 'bootstrap/dist/css/bootstrap.css';

function Filters(){
    return(
        <div className="filters">
            <div className="filter">
                <h3>Filters</h3>
                <ul>
                    <li><a href="#">Price</a></li>
                    <li><a href="#">Category</a></li>
                    <li><a href="#">Brand</a></li>
                    <li><a href="#">Rating</a></li>
                </ul>
            </div>
        </div>
    )
};
export default Filters;