import React, {FC} from 'react';
import TablePosts from './TablePosts';

import { IHandleClick } from '../declaration';
import { IProduct } from '../declaration'

interface IPostsProps {
    handleClick: IHandleClick
    products: IProduct[]
}

const Posts: FC<IPostsProps> = ({handleClick, products}) => {

    return (
        <div>  
            { products.map((product) => <TablePosts key={product.name} product={product} handleClick={handleClick}/>)}
        </div>
    );
};

export default Posts;