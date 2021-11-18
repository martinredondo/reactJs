import React,{useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import  ItemDetail  from './ItemDetail';
import Spinner from './Spinner';
import db from './firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});
    const [loader, setLoader] = useState(true);

    const { itemId } = useParams();

  useEffect(() => {
    setLoader(true);

    const myItem = doc(db, 'products', itemId);

    getDoc(myItem)
      .then((res) => {
        const result = { id: res.id, ...res.data() };
        setProduct(result);
      })
      .finally(() => {
        setLoader(false);
      });
  }, []);
    return loader ? <Spinner/> : <ItemDetail {...product} />
}
export default ItemDetailContainer;

