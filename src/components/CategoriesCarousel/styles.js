import { Link } from 'react-router-dom';
import styled from 'styled-components';


export const Container = styled.div`
.Carousel-item {
    padding-right: 40px;

}
.react-multiple-carousel__arrow--left {
  left: 15px;
  top:10px;
}
.react-multiple-carousel__arrow--right {
  
  top:10px;
}

padding-left: 40px;
`;

export const Title = styled.h2`
  font-size: 32px;
  font-weight: 800;
  color:${(props) => props.theme.purple};
  padding-bottom: 12px;
  position: relative;
  text-align: center;
  margin-bottom: 40px;
  margin-top: 20px;

&::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 56px;
    height: 4px;
    background-color:${(props) => props.theme.purple};
    left: calc( 50% - 28px );
}
`;

export const ContainerItems = styled.div`
  background-image: url(${props => props.$imageUrl});
  background-position: center;
  background-size: cover;
  border-radius: 30px;
  display: flex;
  align-items: center;
  padding: 20px 10px;
  width: 318px;
  height: 232px;
  

p {
  font-size: 20px;
  font-weight: 700;
  color: ${(props) => props.theme.white};
  background-color: #00000080;
  border-radius: 30px;
  padding: 10px 30px;
  margin-top: 50px;
  


  
}
`;
export const CategoryButton = styled(Link)`
color:${(props) => props.theme.white};
background-color: rgba(0,0,0,0.5);
padding: 10px 30px;
border-radius: 30px;
font-size: 22.5px;
margin-top: 50px;
font-weight: 500;
text-decoration: none;

&:hover {
background-color:${(props) => props.theme.purple};
}
`;




