import React, { useEffect, useState } from 'react';
import './Shop.css'
import ShoppingCart from './Shopping-cart/ShoppingCart';
import Item from './Item/Item';
import { fakeDb, localStoreCard } from '../../../utilities/fakedb';
import useCart from '../../assets/Hooks/useCart';
import useShop from '../../assets/Hooks/useShop';

function Shop(props) {
    const [shops,setShops]=useShop();
    const [cart, setCart] = useCart();

  

 
  
  function stroTocart(shop){
    if(!shop.quantity){
      shop.quantity=1;
    }
    
    const newCart=[...cart, shop];
    setCart(newCart)
    fakeDb(shop.id)
    
  }

    return (
        <div className='shop-container'>
            <div className='shop-item'>
              { shops.map(shop => <Item shop={shop} key={shop.id} stroTocart={()=>stroTocart(shop)}></Item>)}
            </div>
            <div className='card'>
                <ShoppingCart cart={cart}></ShoppingCart>
        
            </div>
        </div>
    );
}

export default Shop;