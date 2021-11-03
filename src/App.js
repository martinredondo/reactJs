import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
   <>
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <ItemListContainer titulo="Todos nuestros libros"/>
        </Route>
        <Route path='/category/:catId'>
          <ItemListContainer titulo="Sagas"/>
        </Route>
        <Route path='/item/:id' component={ItemDetailContainer} />
      </Switch>
    </BrowserRouter>
   </>
  );
}

export default App;
