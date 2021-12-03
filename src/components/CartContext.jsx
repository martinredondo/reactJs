import React,{useState} from 'react';
import { Notyf } from 'notyf';
import {addDoc, collection} from 'firebase/firestore';
import db from './firebaseConfig';

const Context = React.createContext()
const CartFunction = ({children})=>{
    const [cart, setCart] = useState([])
    const [unidades, setUnidades] = useState(0)
    const [total, setTotal] = useState(0)
    const notyf = new Notyf();

    const buyProducts = async () => {
        try {
            const pedido = collection(db, 'orders');
            const notyf = new Notyf();
            const final = cart?.reduce(
                (previous,current) => 
                previous?.price * previous.unidades +
                current?.price * current?.unidades 
            );
            const addProducts = await addDoc(pedido, {
                buyer: {
                    name: 'Martin Redondo',
                    phone: '697723348',
                    email: 'arquitectomartinredondo@gmail.com'
                },
                items: cart?.map((product) => (
                    {
                        name: product?.name,
                        price: product?.price,
                        id: product?.id
                    }
                )),
                final,
            });
            if (addProducts !== ''){
                setCart([]);
                setUnidades(0)
                notyf.success(`Compra realizada, su id es para seguimiento es: ${addProducts.id} !Muchas gracias!`);
            }
        } catch (error){
            console.log(error);
        }
    };

    const onAdd = (producto,cantidad) => {
        const isInCart = cart.find(item => item.id === producto.id)
        if(!isInCart){
            setCart([...cart, {id: producto.id, name: producto.name, price: producto.price,image:producto.image,cantidad: cantidad, subtotal: (producto.price * cantidad)}])
            setTotal(total + (producto.price * cantidad))
            setUnidades(unidades +1)
        } else {
            const cartAux = cart.map((item) => {
                 if(item.id===producto.id){
                     item.cantidad += cantidad
                     item.subtotal += (producto.price * cantidad)                 
                }
                return item
            })
            setCart(cartAux)
            setTotal(total + (producto.price * cantidad))
        }
        
    }
    const clearCart = () => {
        setCart([])
        setTotal(0)
        setUnidades(0)
        notyf.error("Se ha vaciado el carrito de compras!");
    }
    const removeItems = (id,precio,cantidad) => {
        const productosFiltrados = cart.filter((item) => item.id !== id)
        setCart(productosFiltrados)
        setTotal(total-(precio * cantidad))
        setUnidades(unidades-1)
        notyf.error(`Quitaste ${cantidad} producto/s del carrito!`);
    }

    return <Context.Provider value={{cart,unidades,total,onAdd,clearCart,removeItems,buyProducts}}>
                {children}
                </Context.Provider>

}

export {CartFunction,Context}
