import React from 'react';
import './Item.css'

function Item(props) {
    //console.log(props.shop)
    const {stroTocart}=props
    const {name, img, price,ratings} = props.shop;
    return (
        <div className='item-box'>
            <img src={img}></img>
            <div className='info'>
                <p>price : {price}</p>
                <p> Ratings : {ratings}</p>
                <h3>Name : {name}</h3>
            </div>
           <div className='but-div'>
            <button onClick={stroTocart}> Add to cart</button>
           </div>
           
        </div>
        
    );
}

export default Item;