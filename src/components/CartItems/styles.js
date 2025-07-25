import styled from "styled-components";

export const ProductImage = styled.img`
width: 80px;
height: 80px;
border-radius: 16px;
`;

export const ButtonGroup = styled.div`
display: flex;
align-items: center;
gap: 12px;



button {
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  color: ${(props) => props.theme.white};
  font-size: 15px;
  /* margin: 5px 12px; */
  width: 30px;
  height: 30px;
  border-radius: 5px;
  background-color:${(props) => props.theme.purple};
  transition: all 0.4s;

  &:hover {
  background-color: ${(props)=> props.theme.secondDarkPurple};
  }

}
`;

export const TrashImage = styled.img`
position: relative;
right: 45px;
width: 22px;
height: 22px;
transition: all 0.1s;
cursor: pointer;

&:hover {
    border: 2px solid #9e1c00 ;
    border-radius: 10px;
    
}
&:active {
    opacity: 80%;
}

`;



export const EmptyCart = styled.p`
font-size: 20px;
text-align: center;
font-weight: bold;
`;


