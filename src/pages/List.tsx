import React, {useContext, useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Navigationbar from '../components/Navigationbar'
import Tableheader from '../components/Tableheader';
import Posts from '../components/Posts';
import CartContext, { ContextProps } from '../context';
import { IHandleClick } from '../declaration';
import { IProduct } from '../declaration';
import { getProducts } from '../api/api';

import { useSortPrice } from '../hooks/useSortPrice';
import { useSortCategory } from '../hooks/useSortCategory';

const List = () => {
  const {cart, setCart} = useContext(CartContext) as ContextProps
  const [products, setProducts] = useState<IProduct[]>([])
  // spread operator

  const handleClick: IHandleClick = (item) => {
        if (cart.find((cartitem) => cartitem.id === item.id)) return;
        setCart([...cart, {...item, amount:1}]);
    };

    const sortByCategory = useSortCategory(products);
    const sortByPrice = useSortPrice(products);
    
    useEffect(() => {
        getProducts().then((data: IProduct[]) => setProducts(data))
    }, [])
 
    const sortCategory = () => {
          setProducts(sortByCategory() as IProduct[])
    } 

    const sortPrice = () => {
          setProducts(sortByPrice() as IProduct[])
    } 


  return (
    <div>
        <Navigationbar  navbarItem={'List of added products'}  link={"/listadded"}/>
        <Tableheader sortCategory={sortCategory} sortPrice={sortPrice}/>
        <Posts products={products} handleClick={handleClick}/>
    </div>
  )
}

export default List;









