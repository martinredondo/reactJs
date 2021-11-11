import React,{useState,useContext} from 'react'
import ItemCount from './ItemCount'
import {Link} from 'react-router-dom'
import {Context} from './CartContext'

const ItemDetail = ({id,name,image,price,stock,desc,trailer}) => {
    const [buy, setBuy] = useState(false)
    const {onAdd} = useContext(Context)
    const agregar = (props) => {
        setBuy(true)
        onAdd({id,name,price}, props.unidades)
        alert(`Agregaste ${props.unidades} al carrito!`)
    }

    return !id ?(
        <h1 style={{textAlign: 'center'}}>El item no existe =(</h1>
    ):(
        <div class="item-detail">
            <h1>{name}</h1>
            <img src={image} alt={name} style={{width:'400px'}}/>
            <p>descripcion: {desc}</p>
            <p style={{fontSize:'larger'}}>Precio: ${price}</p>
            {!buy ? <ItemCount stock={stock} onAdd={agregar}/> : <Link to='/cart'><button className='btn'>Terminar compra</button></Link>}
            <h2>Trailer</h2>
            <iframe width="560" height="315" src={trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    )
}
export default ItemDetail;
