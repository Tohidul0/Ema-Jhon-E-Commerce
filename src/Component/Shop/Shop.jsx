import React, { useEffect, useState } from 'react';
import './Shop.css'
import ShoppingCart from './Shopping-cart/ShoppingCart';
import Item from './Item/Item';

function Shop(props) {
    const [shops,setShops]=useState([]);
    const [cart, setCart] = useState([]);

  useEffect(()=>{
    fetch('../../../fakeData/products.json')
    .then(res => res.json())
    .then(data => setShops(data))
  },[])


  function stroTocart(shop){
    const newCart=[...cart, shop];
    setCart(newCart)
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