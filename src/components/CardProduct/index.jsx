import propTypes from "prop-types";
import { Container, CardImage } from './style';
import { CartButton } from "../CartButton";
import { useCart } from "../../hooks/CartContext";


export function CardProduct({ product }) {
    const { putProductInCart } = useCart();

    return (
        <Container>
            <CardImage src={product.url} alt={product.name} />
            <div>
                <p>{product.name}</p>
                <strong>{product.currencyValue}</strong>
            </div>
            <CartButton onClick={() => putProductInCart(product)}></CartButton>
        </Container>
    );
}
CardProduct.propTypes = {
    product: propTypes.object
};
