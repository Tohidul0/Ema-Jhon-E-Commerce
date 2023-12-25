import React, { useEffect } from 'react';
import './ShopiingCart.css'


function ShoppingCart(props) {
    const {cart} =props;
    //console.log(cart)
    let total=0;
    for(const one of cart){
        total+=one.price
    }

    
    return (
        <div className='shopping-cart'>
            <h1>Order Item</h1>
            <h3>total Price : {total}</h3>
            <h4>Selected Item :{cart.length} </h4>
            
        </div>
    );
}

export default ShoppingCart;