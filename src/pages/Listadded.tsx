import React, { FC, useContext } from 'react';
import Navigationbar from '../components/Navigationbar';
import CartItems from '../components/CartItems';
import Tableheader from '../components/Tableheader';
import CartContext, { CartObject, ContextProps } from '../context';
import { useSortCategory } from '../hooks/useSortCategory';
import { useSortPrice } from '../hooks/useSortPrice';

const Listadded: FC = () => {
    const {cart, setCart} = useContext(CartContext) as ContextProps

    
    const sortByCategory = useSortCategory(cart);
    const sortByPrice = useSortPrice(cart);
    
    const sortCategory = () => {
          setCart(sortByCategory() as CartObject[]) 
    } 

    const sortPrice = () => {
          setCart(sortByPrice() as CartObject[])
    } 

    return (
        <div>
            <Navigationbar navbarItem={'List of all products'} link={"/list"}/>
            <Tableheader sortCategory={sortCategory} sortPrice={sortPrice}/>
            <CartItems/>
        </div>
    );
};

export default Listadded;