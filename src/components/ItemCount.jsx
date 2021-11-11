import React, {useState} from 'react'

const ItemCount = (props) => {
    const [stock, setStock] = useState(props.stock);
    const [unidades, setUnidades] = useState(0)

    const handleStock = {
        sumaStock: () => {
            if(stock===0){
                alert('Actualmente no contamos con mas stock')
            } else {
                setUnidades(unidades +1)
                setStock(stock -1)
            }
        },
        restaStock: () => {
            if(unidades===0){
                alert('Seleccione por lo menos 1 unidad')
            } else {
                setUnidades(unidades -1)
                setStock(stock +1)
            }
        }

    }
    return (
        <div className="item-count">
            <div className="buttom-item-count">
                <button onClick={handleStock.restaStock} className="btn">-</button>
                <p>{unidades}</p>
                <button onClick={handleStock.sumaStock} className="btn">+</button>
            </div>
            <div className="">
                <p>Stock disponible: {stock}</p>
            </div>
            <div className="agregar-carrito">
                <button className="btn" onClick={()=>props.onAdd({unidades})}>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount
