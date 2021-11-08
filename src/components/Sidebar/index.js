import React  from 'react';
import { SidebarContainer,
    Icons,
    CloseIcon, 
    SidebarMenu, 
    SidebarLink, 
    SidebarBtnWrap, FaFacebooks, FaWhatsapps, FaTelegrams } from './SidebarElement';


    
const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icons onClick={toggle}>
                <CloseIcon />
            </Icons>
            <SidebarMenu>
                <SidebarLink to="/">Home</SidebarLink>
                <SidebarLink to="/">Projects</SidebarLink>
                <SidebarLink to="/">Contact Me</SidebarLink>
            </SidebarMenu>
            <SidebarBtnWrap>
                <FaFacebooks to="/"></FaFacebooks>
                <FaWhatsapps to="/"></FaWhatsapps>
                <FaTelegrams to="/"></FaTelegrams>
            </SidebarBtnWrap>
        </SidebarContainer>
    )
}

export default Sidebar
