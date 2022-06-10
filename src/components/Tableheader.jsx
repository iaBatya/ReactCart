import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Table } from 'reactstrap';

const Tableheader = ({setShow}) => {
    return (
        <>
            <Table  bordered    hover>
                <thead>
                    <tr>
                        <th>
                            Category
                        </th>
                        <th>
                            Name
                        </th>
                        <th>
                            Price
                        </th>
                        <th>
                            <button onClick={()=> setShow(true)}>List</button>
                            <button onClick={()=> setShow(false)}>Added</button>
                        </th>
                    </tr>
                </thead>
            </Table>
        </>
    );
};

export default Tableheader;