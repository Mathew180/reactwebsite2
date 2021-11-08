import React from 'react';
import { Nav, NavLink, NavIcon, Bars } from './Navbarcomponent';


const Navbar = ({ toggle }) => {
    return (
      <>
        <Nav>
            <NavLink to='/'>R2ArtGallery</NavLink>
            <NavIcon onClick={toggle}>
            
              <Bars /> 
            </NavIcon>
           
        </Nav>
      </>
    )
}

export default Navbar
