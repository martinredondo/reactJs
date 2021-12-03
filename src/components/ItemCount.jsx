import React, {useState} from 'react';
import { Notyf } from 'notyf';

const ItemCount = (props) => {
    const [stock, setStock] = useState(props.stock);
    const [unidades, setUnidades] = useState(0);
    const notyf = new Notyf();

    const handleStock = {
        sumaStock: () => {
            if(stock===0){
                notyf.error('Actualmente no contamos con mas stock');
            } else {
                setUnidades(unidades +1)
                setStock(stock -1)
            }
        },
        restaStock: () => {
            if(unidades===0){
                notyf.error('Seleccione por lo menos 1 unidad');
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
                {unidades === 0 ? "" : <button className="btn" onClick={()=>props.onAdd({unidades})}>Agregar al carrito</button>}
            </div>
        </div>
    )
}

export default ItemCount;

