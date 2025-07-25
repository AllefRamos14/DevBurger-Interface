import styled from "styled-components";


export const ContainerButton = styled.button`
position: relative;
width: 320px;
height:52px;
left: 20px;
background-color: ${(props) => props.theme.purple};
border-radius: 5px;
color: ${(props) => props.theme.white};
font-family: "Road Rage", sans-serif;
font-weight: 400;
font-size: 30px;
line-height: 100%;
letter-spacing: 0%;
border: none;
border-radius: 5px;

&:hover {
    background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='5' ry='5' stroke='white' stroke-width='4' stroke-dasharray='6%2c14' stroke-dashoffset='0' stroke-linecap='round'/%3e%3c/svg%3e");
    border-radius: 5px;
    background-color: ${(props) => props.theme.secondDarkPurple};
}
`;