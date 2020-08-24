import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import "./Product.css";

const Product = (props) => {
 //console.log(props);
  
  const { name, img, seller, price, stock } = props.product;
  //console.log(name);
  return (
    <div className="product">
      <div className="product-img">
        <img src={img} alt="" srcset="" />
      </div>
      <div className="product-details">
        <h4>{name}</h4>
        
        <p>By : {seller}</p>
        <h5>${price}</h5>
              <p>{stock} in Stock</p>
              <button className="cart-btn" onClick={()=>props.handleCart(props.product)}><FontAwesomeIcon icon={faShoppingCart} />Add to cart</button>
      </div>
    </div>
  );
};

export default Product;
