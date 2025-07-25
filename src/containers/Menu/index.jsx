import { Banner, Title, Container, CategoryMenu, ProductsContainer, CategoryButton, ButtonVolta} from "./styles";

import { api } from '../../services/api';
import { useEffect, useState } from "react";
import { formatPrice } from "../../utils/formatPrice";
import { CardProduct } from '../../components';
import { useLocation, useNavigate } from "react-router-dom";



export function Menu() {

    const [categories, setCategories] = useState([]);
    const [Products, setProduct] = useState([]);
    const [filteredProducts, setfilteredProducts] = useState([]);


    const navigate = useNavigate();

    const { search } = useLocation(); // categorias=1
         
    const queryparams = new URLSearchParams(search);

    const [ActiveCategory, setActiveCategory] = useState(() => {
        const categoryId = +queryparams.get('categoria');

        if (categoryId) {
            return categoryId;

        }
        return 0;
    });

    useEffect(() => {
        async function loadcategories() {
            const { data } = await api.get('/categories')

            const Newcategories = [{ id: 0, name: 'Todas' }, ...data];

            setCategories(Newcategories);

        }
        async function loadproducts() {
            const { data } = await api.get('/products');

            const newProduct = data.map((product) => ({
                currencyValue: formatPrice(product.price),
                ...product,
            }));

            setProduct(newProduct)

        }
        loadcategories()
        loadproducts();
    }, []);

    useEffect(() => {
        if (ActiveCategory === 0) {
            setfilteredProducts(Products);
        } else {
            const newFilteredProducts = Products.filter(
                (product) => product.category_id === ActiveCategory,
            );
            setfilteredProducts(newFilteredProducts);


        }
    }, [Products, ActiveCategory]);

    return (

        <Container>
            <Banner>
                <Title>
                    O MELHOR
                    <br />
                    HAMBÚRGUER
                    <br />
                    ESTÁ AQUI!
                    <span>Esse Cardápio Está irresistível! </span>

                </Title>

            </Banner>
            <CategoryMenu>
                {categories.map(category => (
                    <CategoryButton key={category.id}
                        $isActiveCategory={category.id === ActiveCategory} // Se colocar $ Ele ta sendo usado somente no stylecompass
                        onClick={() => {
                            navigate(
                                {
                                    pathname: '/cardapio',
                                    search: `?categoria=${category.id}`,
                                },

                                {
                                    replace: true,
                                },
                            );
                            setActiveCategory(category.id);
                        }}
                    >{category.name}
                    </CategoryButton>
                ))}
                <ButtonVolta to="/Home">
                    ❮
                </ButtonVolta>
            </CategoryMenu>
            <ProductsContainer>
                {filteredProducts.map((product) => (
                    <CardProduct product={product} key={product.id} />

                ))}


            </ProductsContainer>
        </Container>
    );

}