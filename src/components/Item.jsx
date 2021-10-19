import React from 'react'

const Item = ({name,desc,price,image}) => {
    return (
        <div className="item">
            <h2>{name}</h2>
            <img src={image} alt={name}/>  
            <p>"{desc}"</p>
            <p>precio: ${price}</p>
        </div>
    )
}
export default Item;
