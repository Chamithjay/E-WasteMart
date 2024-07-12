import react from 'react';
import './css/selling.css';
import ImageUpload from './imageUpload';
import Nav from './navbar';
import Footer from './footer';

function Selling(){
    return(
        <div>
           <Nav/>  
           <div style={{ backgroundColor: '#4D869C;', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                
                <div className="container" style={{ width:'80vw',backgroundColor: '#176B87' ,color:'white'}}>
                    <form> 
                        <h2>List Your Item Here</h2>
                        <div className="form-group">
                            <label htmlFor="pTitle">Product Title</label>
                            <input type="text" className="form-control" id="email" placeholder="Enter Product Title" name="pTitle"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="pwd">Product Description :</label>
                            <textarea name="pDescription" className="form-control" id="" placeholder='Enter product title here'></textarea>
                        </div>
                        <div className="form-group">
                            <label htmlFor="pTitle">Product Status</label>
                            <select name="pStatus" id="" className="form-control">
                                <option value="">Select Product Status</option>
                                <option value="">All parts are working</option>
                                <option value="">Some parts are working</option>
                                <option value="">All parts are not working</option>
                                <option value="">I don't know</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="pTitle">Quantity</label>
                            <input type="number" className="form-control" id="quantity" placeholder="Enter Product Quantity" name="pQuantity"/>
                        </div>
                        
                        <ImageUpload />
                        <div className="form-group">
                            <label htmlFor="pTitle">Price $</label>
                            <input type="text" className="form-control" id="quantity" placeholder="Enter Product Price" name="pPrice"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="pTitle">Product Rating  (between 0 and 5)</label>
                            <input type="range" className="form-control" id="quantity" placeholder="Enter Product Price" name="pRating" min="0" max="5" />
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