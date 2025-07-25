import styled from "styled-components";
import banner from "../../assets/banner-Home.svg";
import background from "../../assets/background.svg"

export const Banner = styled.div`
background: url('${banner}');
background-size: cover;
background-position: center;
height: 480px;

h1 {
    font-family: 'Road Rage', sans-serif;
    font-size: 80px;
    color:${(props)=> props.theme.darkWhite};
    position: absolute;
    right: 170px;
    top: 10%;

}
`;
export const Conteiner = styled.div`
background: linear-gradient(
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0.5)
),
url('${background}');
`;
