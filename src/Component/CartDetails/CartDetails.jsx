import React from 'react';
import "./CartDetails.css"
import ShoppingCart from '../Shop/Shopping-cart/ShoppingCart';
import useCart from '../../assets/Hooks/useCart';
import ItemDetails from './ItemDetails';

function CartDetails(props) {
    const [cart, setCart] = useCart([]);
    return (
       
        <div className='cartDetails'>
            <div>
           
                
                {cart.map(single => <ItemDetails key={single.id}  single={single}></ItemDetails>)}
                
               
            </div>
            <ShoppingCart></ShoppingCart>
        </div>
    );
}

export default CartDetails;