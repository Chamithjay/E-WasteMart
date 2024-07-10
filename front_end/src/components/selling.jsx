import react from 'react';
import './css/selling.css';
import ImageUpload from './imageUpload';
import Nav from './navbar';

function Selling(){
    return(
        <div>
           <Nav/>  
           <div style={{ backgroundColor: '#4D869C;', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                
                <div className="container" style={{ width:'80vw',backgroundColor: '#003C43' ,color:'white'}}>
                
                    {/* change the form action to the correct path */}
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
                            <label htmlFor="pTitle">Quantity</label>
                            <input type="number" className="form-control" id="quantity" placeholder="Enter Product Quantity" name="pQuantity"/>
                        </div>
                        
                        <ImageUpload />
                        <div className="form-group">
                            <label htmlFor="pTitle">Price $</label>
                            <input type="text" className="form-control" id="quantity" placeholder="Enter Product Price" name="pPrice"/>
                        </div>

                        <button type="submit" className="btn btn-primary">List this Product</button>

                    </form>
                                
                </div>

            </div>
            
        </div>
    )
}

export default Selling