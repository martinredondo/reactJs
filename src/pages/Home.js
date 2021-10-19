import React from 'react';
import Navbar from '../components/Navbar';
import ItemListContainer from '../components/ItemListContainer';

const Home = () => {
    return (
        <>
            <Navbar />
            <ItemListContainer titulo="Ofertas de la semana"/>
        </>
    );
};
export default Home ;