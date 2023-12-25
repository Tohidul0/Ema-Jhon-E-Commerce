import React, { useEffect, useState } from 'react';
import './Shop.css'
import ShoppingCart from './Shopping-cart/ShoppingCart';
import Item from './Item/Item';
import { fakeDb, localStoreCard } from '../../../utilities/fakedb';

function Shop(props) {
    const [shops,setShops]=useState([]);
    const [cart, setCart] = useState([]);

  useEffect(()=>{
    fetch('../../../fakeData/products.json')
    .then(res => res.json())
    .then(data => setShops(data))
  },[])

  useEffect(()=>{
    const localStrData= localStoreCard()
    //console.log(localStrData)
    for (const id in localStrData)
    {
      const addedData = shops.find(shop => shop.id === id)
      console.log(addedData);
    }
    
},[])

  

  
  function stroTocart(shop){
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