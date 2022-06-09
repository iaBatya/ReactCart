import React from 'react';
import Tableheader from './Tableheader';
import TablePosts from './TablePosts';
import data from '../data';

const Posts = () => {
    return (
        <div>
            <Tableheader/>   
            { data.map((item) => <TablePosts key={item.id} item={item}/>)}
        </div>
    );
};

export default Posts;