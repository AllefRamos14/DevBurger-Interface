import { ContainerButton } from './style';
import PropTypes from 'prop-types';


export function Button({ children, ...promps }) {
    return <ContainerButton {...promps}>{children}</ContainerButton>;
}
Button.proptype = {
    children: PropTypes.string
};