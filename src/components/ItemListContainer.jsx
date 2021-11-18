import React, {useState , useEffect} from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import Spinner from './Spinner';
import db from './firebaseConfig';
import { collection, query, where, getDocs} from 'firebase/firestore';

const ItemListContainer = (props) => {
    const [items, setItems] = useState([]);
    const [loader, setLoader] = useState(true);

    const { categoryId } = useParams();

    useEffect(() => {
        setLoader(true);

        const myItems = categoryId
            ? query(collection(db,'products'), where('category', '==', categoryId ))
            : collection(db,'products');

        getDocs(myItems)
            .then((res) => {
                const results = res.docs.map((doc) => {
                    return {...doc.data(), id:doc.id };
                });
                setItems(results);
            })
            .finally(() => setLoader(false));
    }, [categoryId])
    return loader ? (
        <Spinner/>
    ) : (
        <div>
            <h1 style={{textAlign: 'center'}}>{props.titulo}</h1>
            <ItemList items={items} />
        </div> 
    );
};
export default ItemListContainer;