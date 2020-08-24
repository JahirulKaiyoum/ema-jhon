import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    const cartItem = cart.length;
     console.log(props);
    const total = cart.reduce((total, prd) => total + prd.price, 0)


    let shippingCost = 0;
    if (cartItem>0 && total>50) {
        shippingCost = 0;
    }
    else if (cartItem===0) {
        shippingCost = 0;
    }
    else {
        shippingCost = 5;
    }


    let estimatedTax = 0;
    if (total<100) {
        estimatedTax = 0;
    }
    else if (total>100 && total<500) {
        estimatedTax=10
    }
    else if (total>500) {
        estimatedTax = 50;
    }
        
    

    return (
        <div>
            <h2>Order Summer</h2>
            <p>Items : {cartItem}</p>
            <p>Price :${total} </p>
            <p>Items:Shipping & Handling: ${shippingCost}</p>
            <p>Total before Tax: ${total+shippingCost}</p>
            <p>Estimated Tax:${estimatedTax}</p>
            <h2>Order total :{total+shippingCost+estimatedTax}</h2>
            <button className="cart-btn">Review Order</button>
        </div>
    );
};

export default Cart;