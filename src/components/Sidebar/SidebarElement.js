import styled from 'styled-components';
import { FaTimes, FaFacebook, FaWhatsapp, FaTelegram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const SidebarContainer = styled.aside`
    position:fixed;
    z-index:933;
    width:300px;
    height:100%;
    background:rgb(15,15, 61) ;
   
    display:grid;
    align-items:center;
    top:0;
    transition:0.3s ease-in-out;
    right: ${({ isOpen }) => (isOpen ? '0' : '-1000px')};

    @media screen and (max-width: 400px){
        width: 100%;
    }
`;

export const CloseIcon = styled(FaTimes)`
    color: #000;

`;

export const Icons = styled.div`
     position : absolute;
     top: 1.2rem;
     right: 1rem;
     background: transparent;
     font-size: 2rem;
     cursor: pointer;
     outline: none;
     
`;

export const FaFacebooks = styled(FaFacebook)`
font-size: 2rem;

    &:hover{
        transition:0.3s ease-in-out;
        color: #010606;
        cursor: pointer;
    }
`;

export const FaWhatsapps = styled(FaWhatsapp)`
font-size: 2rem;

    &:hover{
        transition:0.3s ease-in-out;
        color: #010606;
        cursor: pointer;
    }
`;

export const FaTelegrams = styled(FaTelegram)`
font-size: 2rem;

    &:hover{
        transition:0.3s ease-in-out;
        color: #010606;
        cursor: pointer;
    }
`;

export const SidebarBtnWrap = styled.div`
     display:flex;
     justify-content: center;
`;

export const SidebarLink = styled(Link)`
   display: flex;
   align-items:  center;
   justify-content: center;
   font-size:1.5rem;
   text-decoration:none;
   list-style:none;
   transition: 0.2s ease-in-out;
   color:white;
   cursor:pointer;

   &:hover{
       color: #e31837;
       transition: 0.2s ease-in-out;
   }
`;

export const SidebarMenu = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 80px);
    text-align: center;

    
    @media screen and (max-width:480px){
        grid-template-rows: repeat(3, 60px)
    }
`;