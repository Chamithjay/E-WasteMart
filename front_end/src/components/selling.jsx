import {useState} from 'react';
import './css/selling.css';
import Nav from './navbar';
import Footer from './footer';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Selling(){
    const [apiError, setApiError] = useState(null);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [Status, setStatus] = useState('');
    const [quantity, setQuantity] = useState('');
    const [rating, setRating] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');
    const navigate = useNavigate(); 

    const handleSubmit = async (e) => {
        e.preventDefault();
        setApiError('');
  
        try {
          const response = await axios.post('http://localhost:3000/product', {
            title,
            description,
            Status,
            quantity,
            rating,
            price,
            image
          });
          if (response.status === 201) { // Check if the signup is successful
            navigate('/'); // Redirect to login page after successful signup
          }
    
          
        } catch (error) {
          setApiError('There was an error adding product, please try again.');
        }
      };
    return(
        <div>
           <Nav/>  
           <div style={{ backgroundColor: '#4D869C', height: '150vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                
                <div className="container" style={{ width:'80vw',backgroundColor: '#176B87' ,color:'white'}}>
                    <form onSubmit={handleSubmit}> 
                        <h2>List Your Item Here</h2>
                        <div className="form-group">
                            <label htmlFor="pTitle">Product Title</label>
                            <input type="text" className="form-control" id="email" placeholder="Enter Product Title" name="pTitle" value={title} onChange={(e) => setTitle(e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="pwd">Product Description :</label>
                            <textarea name="pDescription" className="form-control" id="" placeholder='Enter product title here'value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                        </div>
                        <div className="form-group">
                            <label htmlFor="pTitle">Product Status</label>
                            <select name="pStatus" id="" className="form-control"onChange={(e) => setStatus(e.target.value)}>
                                <option value={Status}>Select Product Status</option>
                                <option value={Status}>All parts are working</option>
                                <option value={Status}>Some parts are working</option>
                                <option value={Status}>All parts are not working</option>
                                <option value={Status}>I don't know</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="pTitle">Quantity</label>
                            <input type="number" className="form-control" id="quantity" placeholder="Enter Product Quantity" name="pQuantity"value={quantity} onChange={(e) => setQuantity(e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="img">Images/s</label>
                            <input type="file" className="form-control" id="img" placeholder="Enter Images" name="img"value={image} onChange={(e) => setImage(e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="pTitle">Price $</label>
                            <input type="text" className="form-control" id="quantity" placeholder="Enter Product Price" name="pPrice"value={price} onChange={(e) => setPrice(e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="pTitle">Product Rating  (between 0 and 5)</label>
                            <input type="range" className="form-control" id="quantity" placeholder="Enter Product Price" name="pRating" min="0" max="5" value={rating} onChange={(e) => setRating(e.target.value)}/>
                        </div>

                        <button type="submit" className="btn btn-primary">List this Product</button>

                    </form>
                                
                </div>

            </div>
           <Footer/>
            
            
        </div>
    )
}

export default Selling