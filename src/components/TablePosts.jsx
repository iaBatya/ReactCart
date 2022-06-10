import React, {useContext} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Table, Button } from 'reactstrap';
import CartContext from '../context';


const TablePosts = ({item, handleClick,}) => {
    const {category:{name}, name:itemName, price, id } = item;
    const {cart, setCart} = useContext(CartContext)

    const handleRemove = (id) => {
        const arr = cart.filter((item) => item.id !== id);
        setCart(arr);
    };


    return (
        <div className='postscomp'>
            <Table bordered hover>
                <tbody>
                        <tr>
                            <th scope="row">
                                {name}
                            </th>
                            <td>
                                {itemName}
                            </td>
                            <td>
                                {price}$
                            </td>
                            <td>
                                <Button color='primary' onClick={()=>handleClick(item)}>Add to cart</Button>
                                <Button onClick={()=>handleRemove(item.id)}>Remove from cart</Button>
                            </td>
                        </tr>
                </tbody>
            </Table>
        </div>
    );
};

export default TablePosts;