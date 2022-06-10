import React, {useState, useEffect, useContext} from 'react';
import { Table } from 'reactstrap';
import CartContext from '../context';

const CartItems = () => {
    const [price, setPrice] = useState(0);
    const {cart, setCart} = useContext(CartContext)

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

    const handleChange = (item, d) => {
        let obj = cart.find((cartitem) => cartitem.id === item.id);
        obj.amount += d;
    
        if (obj.amount === 0) obj.amount = 1;
        setCart([...cart]);
      }

    useEffect(() => {
        handlePrice();
    });
    
    console.log(cart)

    return (
        <article>
            {cart.map((item) => (
            <div key={item.id}>
                 <Table bordered hover>
                <tbody>
                        <tr>
                            <th scope="row">
                                {item.category.name}
                            </th>
                            <td>
                                {item.name}
                            </td>
                            <td>
                                {item.price * item.amount}$
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

