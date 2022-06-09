import React from 'react';
import Navigationbar from '../components/Navigationbar';


const listadded = () => {
    return (
        <div>
            <Navigationbar navbarItem={'List of all products'} link={"/list"}/>
        </div>
    );
};

export default listadded;