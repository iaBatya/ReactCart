import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; 

interface INavigationbarProps {
    navbarItem: string
    link: string
}

const Navigationbar: FC<INavigationbarProps> = ({navbarItem, link}) => {
    return (
        <div>
            <Link to={link}>
                {navbarItem}
            </Link>
        </div>
    );
};

export default Navigationbar;


// <Navbar color="light" expand="md" light>
//             <NavbarBrand href="/">
//                 Main page
//             </NavbarBrand>
//             <NavbarToggler onClick={function noRefCheck(){}} />
//             <Collapse navbar>
//                 <Nav  className="me-auto" navbar>
//                     <NavItem>
//                         <NavLink href={link}>
//                             {navbarItem}
//                         </NavLink>
//                     </NavItem>
//                 </Nav>
//             </Collapse>
//         </Navbar>