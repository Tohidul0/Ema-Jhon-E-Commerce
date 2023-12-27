import React, { useEffect } from 'react';
import './ShopiingCart.css'


function ShoppingCart(props) {
    const {cart} =props;
    //console.log(cart)
    let total=0;
    let item =0;
    let shipping =0
    for(const one of cart){
        shipping  += one.shipping;
        total += one.price * one.quantity
        item += one.quantity;
    }
    const tax= parseFloat((total * 0.1).toFixed(2)); 
    const totalPrice = total+shipping + tax;

    
    return (
        <div className='shopping-cart'>
            <h1>Order Item</h1>
            <h3>Shipping : {shipping}</h3>
            <h3>price : {total}</h3>
            <h3>Tax : {tax}</h3>
            <h3>total Price : {totalPrice}</h3>
            <h4>Selected Item :{item} </h4>
            
        </div>
    );
}

export default ShoppingCart;