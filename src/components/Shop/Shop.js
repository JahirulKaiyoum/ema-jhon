import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';




const Shop = () => {
    const productNumber = fakeData.slice(0, 10);

    //console.log(productNumber);

    const [products, setProduct] = useState(productNumber);
    const [cart, setCart] = useState([]);

    

    const handleCart = (product) => {

       console.log("Button clicked",product);
        
        const newCart = [...cart, product];
        setCart(newCart);
        console.log(newCart);

        // console.log(newCart);
    }
    
    return (
        
        <div className="shop-container">
            <div className="product-container">
                {
                    products.map(product => <Product handleCart={handleCart} product={product}></Product>)
                }   
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
                
            </div>
            
            
        </div>
    );
};

export default Shop;