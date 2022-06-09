import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Table } from 'reactstrap';

const Tableheader = () => {
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
                            Actions
                        </th>
                    </tr>
                </thead>
            </Table>
        </>
    );
};

export default Tableheader;