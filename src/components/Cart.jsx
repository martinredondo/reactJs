import React,{useContext} from 'react'
import {Context} from './CartContext'

const Cart = () => {
    const {cart,unidades, total,clearCart,removeItems} = useContext(Context)
    return (
        <>
            <h2 style={{textAlign: 'center'}}>El total del carrito es ${total} y tienes {unidades} unidades</h2>
            {cart.map((item) =>
                <div className="compras-container">
                    <h3>nombre: {item.name}</h3>
                    <img src={item.image} alt={item.name}/>
                    <p>precio: {item.price}</p>
                    <p>cantidad: {item.cantidad}</p>
                    <p>subtotal: {item.subtotal}</p>
                    <button className="btn btn-remove" onClick={()=>removeItems(item.id,item.price,item.cantidad)}>remover item</button>
                </div>)}
            <button onClick={clearCart} className="btn btn-empty">Vaciar carrito</button>
        </>
    )
}

export default Cart