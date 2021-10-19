import React, {useState , useEffect} from 'react'
import data from '../data/data.js'
import ItemList from './ItemList'

const ItemListContainer = (props) => {
    const [productos,setProductos] = useState([])
    const [cargando,setCargando] = useState(true)

    useEffect(() =>{
        const listaDeProductos = new Promise((res,rej)=>{
            setTimeout(()=>{
                res(data)
            },2000)
        })
        listaDeProductos.then((data)=>{
            setProductos(data)
            setCargando(false)
        })
    },[])

    return (
        <div>
            <h1>{props.titulo}</h1>
            {cargando ? <h2>Cargando productos...</h2> : <ItemList productos={productos} />}
        </div>
    )
}
export default ItemListContainer;