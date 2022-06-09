import React from 'react';
import Navigationbar from '../components/Navigationbar';

const list = () => {
    return (
        <div>
            <Navigationbar navbarItem={'List of added products'} link={"/listadded"}/>
        </div>
    );
};

export default list;