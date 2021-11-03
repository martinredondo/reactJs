import React,{useState, useEffect} from 'react';
import ItemDetail from './ItemDetail';
import data from '../data/data';
import {useParams} from 'react-router-dom';

const ItemDetailContainer = () => {
    const [item,setItem] = useState({});
    const [loader,setLoader] = useState(true);
    const {id} = useParams();

    useEffect(() =>{
        setLoader(true);
        const getItems = new Promise((resolve) =>{
            setTimeout(()=>{
                resolve(data);
            },2000);
        });

        getItems
        .then((res) => {
            setItem(res.find((i) => i.id === id));
        })
        .finally(() => setLoader(false));
    }, [id]);
    return loader ? <h3 style={{textAlign: 'center'}}>Cargando...</h3> : <ItemDetail {...item} />;
};
export default ItemDetailContainer;