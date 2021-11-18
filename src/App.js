import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import {CartFunction} from './components/CartContext'
import Cart from './components/Cart';

function App() {
  return (
   <>
    <BrowserRouter>
    <CartFunction>
      <Navbar />
      <Switch>
        <Route  path='/' exact>
          <ItemListContainer titulo="Todos nuestros libros"/>
        </Route>
        <Route path='/cart' exact>
          <Cart/>
        </Route>
        <Route path='/category/:catId' exact>
          <ItemListContainer titulo="Sagas"/>
        </Route>
        <Route path='/item/:id' exact>
          <ItemDetailContainer/>
        </Route>
      </Switch>
    </CartFunction>
    </BrowserRouter>
   </>
  );
}

export default App;
