import styled from "styled-components";
import Texture from '../../assets/Texture.svg';
import background from '../../assets/background.svg';

export const Container = styled.div`
  width: 100%;
  background-color: ${(props)=> props.theme.secondWhite};
  min-height: 100vh;
  background: linear-gradient(
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0.5)
  ),
  url('${background}');
`;

export const Banner = styled.div`
display: flex;
justify-content: center;
align-items: center;
background-position: center;
background: url('${Texture}');
background-size: cover;
position: relative;
height: 180px;

img {
    height: 160px;
    
}
`;

export const Title = styled.h2`

text-align: center;
position: relative;
padding-bottom: 12px;
font-size: 32px;
color: ${(props)=> props.theme.gren};
font-weight: 800;

&::after {  // traço de baixo do texto ... 
    position: absolute;
    bottom: 0;
    left: calc(50% + -28px);
    content: ''; // obrigatorio se nao, funciona.
    width:56px ;
    height: 4px;
    background-color: ${(props)=> props.theme.gren};
}
`;

export const Content = styled.div`
display: grid; 
grid-template-columns: 1fr 30%; // define tanto de colunas que vocês vai querer
gap: 40px; // espaçamento entre os items
width: 100%;
max-width: 1280px; // defeni tamanho maximo da tela 
padding: 40px;
margin: o auto;
`;