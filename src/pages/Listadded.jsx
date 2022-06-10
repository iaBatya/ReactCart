import React, {useContext} from 'react';
import Navigationbar from '../components/Navigationbar';
import CartItems from '../components/CartItems';
import Tableheader from '../components/Tableheader';
import Posts from '../components/Posts';
import CartContext from '../context';
import List from './List';

const Listadded = ({handleChange, setCart, cart}) => {

    return (
        <div>
            <Navigationbar navbarItem={'List of all products'} link={"/list"}/>
            <Tableheader  />
            <CartItems cart={cart} setCart={setCart} handleChange={handleChange}/>
        </div>
    );
};

export default Listadded;