import styled from 'styled-components';
import { Link as Reactlink } from 'react-router-dom';
import backgroundLogin from '../../assets/background-login.svg';
import background from '../../assets/background.svg';



export const Container = styled.div`
display: flex;
width: 100vw;
height: 100vh;
`;

export const LeftContainer = styled.div`
background: url('${backgroundLogin}');
background-size: cover;
background-position: center;

width: 100%;
height: 100%;
max-width: 50%;

display: flex;
align-items: center;
justify-content: center;

img {
    width: 65%;

}
width: 100%;
height: 100%;
max-width: 50%;

`;

export const RighContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
background: url('${background}');
background-color: #1E1E1E;
width: 100%;
height: 100%;
max-width: 50%;

p {
  color: ${(props) => props.theme.white};
  font-size: 18px;
  font-weight: 800;

}

a:hover{
  text-decoration: underline;
}

`;

export const Title = styled.h2`
  font-family: "Road Rage", sans-serif;
  font-size: 39.59px;
  font-weight: 400;
  color: ${(props) => props.theme.purple};

  
`;

export const Form = styled.form`
display: flex;
flex-direction: column;
gap: 20px;
padding: 20px;
width: 100%;
max-width: 400px;
`;

export const InputConteiner = styled.div`
display: flex;
flex-direction: column;
gap: 5px;
width: 100%;

input {
   width:100% ;
   height: 52px;
   border: none;
   border-radius: 8px;
   padding: 0 16px;
}
label {
    font-size: 18px;
    font-weight: 600;
    color: ${(props) => props.theme.white};
}

p {
  font-size:14px ;
    line-height: 80%;
    color:${(props)=> props.theme.darkRed};
    font-weight: 600;
    height: 10px;
}
`;
export const Input = styled.input`

`;
export const Link = styled(Reactlink)`
text-decoration: none;
color:${(props) => props.theme.white};
`;
