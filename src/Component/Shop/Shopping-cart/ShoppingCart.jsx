import React from 'react';
import './ShopiingCart.css'

function ShoppingCart(props) {
    const {cart} =props;
    return (
        <div className='shopping-cart'>
            <h1>Order Item</h1>
            <h4>Selected Item :{cart.length} </h4>
        </div>
    );
}

export default ShoppingCart;