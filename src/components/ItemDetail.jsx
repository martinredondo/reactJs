import React,{useState,useContext} from 'react'
import ItemCount from './ItemCount'
import {Link} from 'react-router-dom'
import {Context} from './CartContext'
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';

const ItemDetail = ({id,name,image,price,stock,desc,trailer}) => {
    const [buy, setBuy] = useState(false)
    const {onAdd} = useContext(Context)
    const notyf = new Notyf();
    const agregar = (props) => {
        setBuy(true)
        onAdd({id,name,price,image}, props.unidades)
        notyf.success(`Agregaste ${props.unidades} producto/s al carrito!`);
    }
    
    return !id ?(
        <h1 style={{textAlign: 'center'}}>El item no existe =(</h1>
    ):(
        <div className="item-detail">
            <h1>{name}</h1>
            <img src={image} alt={name} style={{width:'400px'}}/>
            <p style={{width: '450px'}}><b>descripcion:</b> {desc}</p>
            <p style={{fontSize:'larger'}}><b>Precio: ${price}</b></p>
            {!buy ? <ItemCount stock={stock} onAdd={agregar}/> : <Link to='/cart'><button className='btn'>Terminar compra</button></Link>}
            <h2>Trailer</h2>
            <iframe width="560" height="315" src={trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    )
}
export default ItemDetail;
