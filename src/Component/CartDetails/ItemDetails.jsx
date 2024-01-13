import React from 'react';
import './ItemDetails.css';

function ItemDetails(props) {
   
    const {img, name, rating} = props.single
    return (
        <div className='item'>
            <img src={img} alt=""  />
            <h3>name : {name}</h3>
            <h4>Rating : {rating}</h4>
        </div>
    );
}

export default ItemDetails;