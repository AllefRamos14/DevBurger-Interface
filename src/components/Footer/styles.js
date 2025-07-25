import styled from "styled-components";

export const Container = styled.div`
   background-color: ${(props)=> props.theme.darkPurple};
   width: 100vw;
   height: 50px;
   display: flex;
   align-items: center;
   justify-content: center;



p { 
    font-size: 15px;
    color: ${(props) => props.theme.white};
    font-weight: lighter;
    

    
}
`;