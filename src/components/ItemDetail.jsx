import React from 'react'

const ItemDetail = ({id,name,image,price,desc,trailer}) => {
    return !id ?(
        <h1 style={{textAlign: 'center'}}>El item no existe =(</h1>
    ):(
        <div class="item-detail">
            <h1>{name}</h1>
            <img src={image} alt={name} style={{width:'400px'}}/>
            <p>descripcion: {desc}</p>
            <p style={{fontSize:'larger'}}>Precio: ${price}</p>
            <h2>Trailer</h2>
            <iframe width="560" height="315" src={trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    )
}
export default ItemDetail;
