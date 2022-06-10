import React, {FC, useContext} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Table, Button } from 'reactstrap';
import CartContext, { CartObject, ContextProps } from '../context';
import { IHandleClick, IProduct } from '../declaration'

interface ITablePostsProps {
    product: IProduct
    handleClick: IHandleClick
}


const TablePosts: FC<ITablePostsProps> = ({product, handleClick}) => {
    const {cart, setCart} = useContext(CartContext) as ContextProps;

    const handleRemove = (id: string) => {
        const arr = cart.filter((item) => item.id !== id);
        setCart(arr);
    };

    const addToCart = () => {
        const cartItem: CartObject = {
            amount: 1,
            category: {
                ...product.category
            },
            id: product.name,
            name: product.name,
            price: product.price
        };

        handleClick(cartItem);
    }

    return (
        <div className='postscomp'>
            <Table bordered hover>
                <tbody>
                        <tr>
                            <th scope="row">
                                {product.category.name}
                            </th>
                            <td>
                                {product.name}
                            </td>
                            <td>
                                {product.price}$
                            </td>
                            <td>
                                <Button color='primary' onClick={addToCart}>Add to cart</Button>
                                <Button onClick={()=>handleRemove(product.name)}>Remove from cart</Button>
                            </td>
                        </tr>
                </tbody>
            </Table>
        </div>
    );
};

export default TablePosts;