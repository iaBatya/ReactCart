import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Table, Button } from 'reactstrap';


const TablePosts = ({item}) => {
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
                                <span>Select: </span>
                                <Button color="primary">+</Button>
                                <span>0</span>
                                <Button color="primary">-</Button>
                            </td>
                        </tr>
                </tbody>
            </Table>
        </div>
    );
};

export default TablePosts;