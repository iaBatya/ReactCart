import React from 'react';
import Tableheader from './Tableheader';
import TablePosts from './TablePosts';
import data from '../data';

const Posts = ({handleClick}) => {
    return (
        <div>  
            { data.map((item) => <TablePosts key={item.id} item={item} handleClick={handleClick}/>)}
        </div>
    );
};

export default Posts;