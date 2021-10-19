import React from 'react'
import Item from './Item'

const ItemList = ({productos}) => {
    return (
        <>
        <div className="item-container">
            {productos.map((producto) =>
                <Item key={producto.id} name={producto.name} desc={producto.desc} price={producto.price} image={producto.image}/>
            )} 
        </div>
        </>
    )
}

export default ItemList;