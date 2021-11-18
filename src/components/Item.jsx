import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({name,desc,price,image,id,category}) => {
    return (
        <Link to={`/product/${id}`}>
            <div className={`item ${category}-category`} >
                <h2>{name}</h2>
                <img src={image} alt={name}/>  
                {/* <p>"{desc}"</p> */}
                <p>precio: ${price}</p>
            </div>
        </Link>
    );
};
export default Item ;

