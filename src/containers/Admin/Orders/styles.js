import Select from 'react-select';
import styled from "styled-components";

export const ProdutoImage = styled.img`
height: 80px;
padding: 12px;
border-radius: 16px;

`;

export const SelectStatus = styled(Select)`
 width: 240px;
 `;

export const Filter = styled.div`
display: flex;
justify-content: center;
margin: 28px 0;
gap: 50px;
`;

export const FilterOption = styled.button`
  background: none;
  font-size: 18px;
  line-height: 20px;
  padding-bottom: 5px;
  border: none;
  color: ${(props) =>
        props.$isActiveStatus ? props.theme.purple : props.theme.darkGray};
  border-bottom: ${(props) =>
        props.$isActiveStatus ? `2px solid ${props.theme.purple}` : 'none'};
cursor: pointer;

`;