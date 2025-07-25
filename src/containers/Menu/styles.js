import styled from "styled-components";
import BannerHamburger from '../../assets/Banner-Hamburger.svg';
import background from "../../assets/background.svg"
import { Link } from "react-router-dom";


export const Container = styled.div`

width: 100%;
min-height: 100vh;
background-color:${(props)=> props.theme.secondWhite} ;
background: linear-gradient(
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0.5)
),
url('${background}')

`;

export const Banner = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 480px;
width: 100%;

background: url('${BannerHamburger}') no-repeat;
background-color: ${(props) => props.theme.mainBlack};
background-position: center;
background-size: cover;
`;
export const Title = styled.h1`
font-family: 'Road Rage', sans-serif;
text-align: center;
font-size: 80px;
line-height: 60px;
color: ${(props) => props.theme.white};
position: absolute;
right: 28%;
top: 18%;



span {
position: absolute;
right: -12%;
top: 90%;
color: ${(props) => props.theme.white};
font-size: 20px;
font-family: 'Poppins', sans-serif;
font-weight: 400;
width:301px;
height: 13px;
     
}
`;

export const CategoryMenu = styled.div`
display: flex;
justify-content: center;
gap: 60px;
margin-top: 30px;

`;

export const CategoryButton = styled(Link)`
text-decoration: none;
cursor: pointer;
color: ${(props) => props.$isActiveCategory
        ? (props) => props.theme.purple
        : (props) => props.theme.darkGray};
font-size: 24px;
font-weight: 500;
padding-bottom: 5px;
line-height: 20px;
border: none;
border-bottom: ${(props) => 
    props.$isActiveCategory && `3px solid ${(props) => props.theme.purple}`};
`;

export const ProductsContainer = styled.div`
display: grid;
grid-template-columns: repeat(3,1fr);
padding: 40px;
justify-content: center;
gap: 60px;
max-width: 1280px;
margin: 50px auto;
`;

export const ButtonVolta = styled(Link)`
    width: 80px;
    height: 50px;
    border: none;
    text-align: center;
    padding: 7px 10px;
    color:rgb(245, 232, 232);
    background:rgb(63, 63, 63);
    cursor: pointer;
    position: absolute;
    right: 93%;
    bottom: 80%;
    z-index: 0;
    border-radius: 70px;
    text-decoration: none;
    font-size: x-large;

    &:before{
    content: '';
    background: linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000);
    position: absolute;
    top: -2px;
    left:-2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: glowing 20s linear infinite;
    opacity: 0;
    transition: opacity .3s ease-in-out;
    border-radius: 10px;
    }

    &:active{
         color:rgb(217, 230, 230)
    }

    &:active:after{
        background: transparent
    }

    &:hover:before {
    opacity: 1;
}

&:after {
    z-index: -1;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: #111;
    left: 0;
    top: 0;
    border-radius: 10px;
}
`;


