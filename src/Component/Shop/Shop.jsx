import React from 'react';
import './Shop.css'
import ShoppingCart from './Shopping-cart/ShoppingCart';

function Shop(props) {
    return (
        <div className='shop-container'>
            <div className='shop-item'>
                <h1>iteeeeeeeeeeeeem</h1>
            </div>
            <div className='card'>
                <ShoppingCart></ShoppingCart>
        
            </div>
        </div>
    );
}

export default Shop;