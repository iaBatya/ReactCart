import React, {useEffect, useState} from 'react';
import Tableheader from './Tableheader';
import TablePosts from './TablePosts';
import data from '../data';

const Posts = ({handleClick}) => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('http://localhost:3001/api/products/')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setData(data);
            })
    }, [])

    return (
        <div>  
            { data.map((item) => <TablePosts key={item.id} item={item} handleClick={handleClick}/>)}
        </div>
    );
};

export default Posts;