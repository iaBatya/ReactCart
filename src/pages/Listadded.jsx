import React from 'react';
import Navigationbar from '../components/Navigationbar';
import CartItems from '../components/CartItems';
import Tableheader from '../components/Tableheader';
import Posts from '../components/Posts';

const Listadded = ({cart, setCart, handleChange, show, setShow, handleClick}) => {
    console.log('helo')


    return (
        <div>
            <Navigationbar navbarItem={'List of all products'} link={"/list"}/>
            <Tableheader  />
        </div>
    );
};

export default Listadded;