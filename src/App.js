import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import {CartFunction} from './components/CartContext';
import Cart from './components/Cart';

function App() {

  return (
   <>
    <BrowserRouter>
    <CartFunction>
          <Navbar/>
          <Switch>
            <Route exact path='/cart'>
              <Cart/>
            </Route>
            <Route exact path='/category/:categoryId' >
              <ItemListContainer titulo="Sagas"/>
            </Route>
            <Route exact path='/product/:itemId' >
              <ItemDetailContainer/>
            </Route>
            <Route exact path='/'>
              <ItemListContainer titulo="Todos nuestros libros"/>
            </Route>
          </Switch>
        </CartFunction>
    </BrowserRouter>
   </>
  );
}

export default App;
