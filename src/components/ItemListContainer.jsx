import React, {useState , useEffect} from 'react'
import data from '../data/data.js'
import ItemList from './ItemList'
import {useParams} from 'react-router-dom'

const ItemListContainer = (props) => {
    const [items,setItems] = useState([]);
    const [loader,setLoader] = useState(true);
    const {catId} = useParams();

    useEffect(() =>{
        setLoader(true);
        const getItems = new Promise((resolve)=>{
            setTimeout(()=>{
                resolve(data)
            },2000)
        });
        getItems.then((res)=>{
            catId ? setItems(res.filter((i)=> i.category === catId)) : setItems(res);
        })
        .finally(() => setLoader(false));
    },[catId]);

    return loader ? <h3 style={{textAlign: 'center'}}>Cargando...</h3> :(
        <div>
            <h1 style={{textAlign: 'center'}}>{props.titulo}</h1>
            <ItemList items={items} />
        </div>
    )
}
export default ItemListContainer;