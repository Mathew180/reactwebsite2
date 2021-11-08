import styled from "styled-components";
import imgBg from '../../images/1595228.jpg';

export const AdsArtContainer = styled.div`
background: linear-gradient(to right, rgba(0,0,0,0.9), rgba(0,0,0,0.7))
,
url(${imgBg});
    height:100vh;
    width:100vw;
    max-height: 400px;
    background-position:center;
    background-size:cover;
    display: flex;
    justify-content: center;
    align-items:center;
    flex-direction:column;
    color:#fff;
    text-align: center;
    padding: 0 1rem;

    h1{
        font-size: clamp(3rem, 5vw, 5rem);
        font-weight:bold;
    }

    p{
        font-size: clamp(1rem, 3vw, 2rem);
        margin-bottom: 2rem;
        line-height:2;
        padding:20px;
    }
`

export const AdsArtMessage = styled.button`
font-size: 1.4rem;
padding: 1rem 2rem;
border:none;
background: #e31837;
color: white;
transition:0.2s ease-out;

&:hover{
   background: #ffc500;
   transition:0.2s ease-out;
   cursor:pointer;
   color:#000;
}

`

