import { createGlobalStyle } from 'styled-components';
import 'react-toastify/ReactToastify.css';  

const globalStyle  = createGlobalStyle`
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    outline: none;
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-style: normal;
}
button,a {
    cursor: pointer;
}

`;
export default globalStyle;