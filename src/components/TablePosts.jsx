import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Table, Button } from 'reactstrap';


const TablePosts = ({item, handleClick, handleRemove}) => {
    const {category, itemName, price, id } = item;

    return (
        <div className='postscomp'>
            <Table bordered hover>
                <tbody>
                        <tr>
                            <th scope="row">
                                {category}
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