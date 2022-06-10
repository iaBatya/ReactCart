import React, {useState, useEffect} from 'react';
import { Table } from 'reactstrap';

const CartItems = ({ cart, setCart, handleChange }) => {
    const [price, setPrice] = useState(0);

    const handleRemove = (id) => {
        const arr = cart.filter((item) => item.id !== id);
        setCart(arr);
        handlePrice();
    };

    const handlePrice = () => {
        let ans = 0;
        cart.map((item) => (ans += item.amount * item.price))
        setPrice(ans);
    };

    useEffect(() => {
        handlePrice();
    });
    
    return (
        <article>
            {cart.map((item) => (
            <div key={item.id}>
                 <Table bordered hover>
                <tbody>
                        <tr>
                            <th scope="row">
                                {item.category}
                            </th>
                            <td>
                                {item.itemName}
                            </td>
                            <td>
                                {price}$
                            </td>
                            <td>
                                <button onClick={() => handleChange(item, 1)}>+</button>
                                <button>{item.amount}</button>
                                <button onClick={() => handleChange(item, -1)}>-</button>
                            </td>
                            <td>
                                <button onClick={() => handleRemove(item.id)}>Remove</button>
                            </td>
                        </tr>
                </tbody>
            </Table>
            </div>
            ))}
        </article>
        )
};

export default CartItems;

