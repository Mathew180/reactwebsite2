import styled from "styled-components";
import imgBg from '../../images/1595228.jpg';

export const HeroContainer = styled.div`
    background: linear-gradient(to right, rgba(0,0,0,0.3), rgba(0,0,0,0.7))
    ,
    url(${imgBg});
    height: 100vh;
    background-position:center;
    background-size:cover;
    width:100vw;
    
`;

export const HeroContent = styled.div`
    height: calc(100vh -80px);
    max-height: 100%;
    width:100vw;
   
 
`;

export const HeroItems = styled.div`
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: flex-start;
    height:100vh;
    max-height:100%;
    width: 650px;
    padding:0 2rem;
    color: #fff;
    text-decoration:uppercase;
    line-height:1;
    font-weight:bold;

    @media screen and (max-width:650px){
        width:100%;
    }
`;


export const HeroH1 = styled.h1`
    font-size: clamp(2.2rem, 7vw, 5rem);
    margin-bottom:3rem;
    box-shadow: 3px 5px #e9ba23;
    letter-spacing: 1px;
`;


export const HeroP = styled.p`
    font-size: clamp(1.5rem, 3.5vw, 3rem);
    margin-bottom: 2rem;
    white-space:nowrap;
    overflow:hidden;
    width: 500px;
    animation:4s typing steps(50, end) infinite;
@keyframes typing{
    from{
        width:0%;
    }
    to{
        width:100%
    }
}
}
`;


export const HeroBtn = styled.button`
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
`;
