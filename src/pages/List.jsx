import React from 'react';
import Navigationbar from '../components/Navigationbar';
import Posts from '../components/Posts';

const list = () => {
    return (
        <div>
            <Navigationbar navbarItem={'List of added products'} link={"/listadded"}/>
            <Posts/>
        </div>
    );
};

export default list;