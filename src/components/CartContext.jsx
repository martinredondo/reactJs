import React,{useState} from 'react'

const Context = React.createContext()
const CartFunction = ({children})=>{
    const [cart, setCart] = useState([])
    const [unidades, setUnidades] = useState(0)
    const [total, setTotal] = useState(0)

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
    }
    const removeItems = (id,precio,cantidad) => {
        const productosFiltrados = cart.filter((item) => item.id !== id)
        setCart(productosFiltrados)
        setTotal(total-(precio * cantidad))
        setUnidades(unidades-1)
    }

    return <Context.Provider value={{cart,unidades,total,onAdd,clearCart,removeItems}}>
                {children}
                </Context.Provider>

}

export {CartFunction,Context}
