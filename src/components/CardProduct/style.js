import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 20px;
padding: 40px ;
border-radius: 26px;
background-color: ${(props) => props.theme.white};
cursor: grab;
box-shadow: rgba(0,0,0, 0.35) 0px 5px 15px;
position: relative;


div {
    width: 100%;
    height: 80px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 5px;
}

p {
  font-size: 18px;
  color: ${(props)=> props.theme.orange};
  line-height: 20px;
  font-weight: 700;
  margin-top: 40px;
}

strong {
  font-size: 20px;
  color: ${(props)=> props.theme.black};
  font-weight: 800;
  line-height: 20px;
}
`;

export const CardImage = styled.img`

`;

