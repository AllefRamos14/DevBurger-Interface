import { useEffect, useState } from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useNavigate } from "react-router-dom";

import { api } from "../../services/api";
import { Container, Title, ContainerItems, CategoryButton } from './styles';


export function CategoriesCarousel() {
    const [categories, setcategories] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        async function loadcategories() {
            const { data } = await api.get('/categories')

            setcategories(data);
            
        }
        loadcategories()
    }, []);

    const responsive = {
        superLargeDesktop: {
            // o nome pode ser qualquer um, depende de você. 
            breakpoint: { max: 4000, min: 3000 },
            items: 4,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1280 },
            items: 4,
        },
        tablet: {
            breakpoint: { max: 1280, min: 690 },
            items: 3,
        },
        celular: {
            breakpoint: { max: 690, min: 0 },
            items: 2,
        },
    };

    return (
        <Container>
            <Title>CATEGORIES</Title>
            <Carousel
                responsive={responsive}
                infinite={true}
                partialVisible={false}
                itemClass="Carousel-item"

            >   
                {categories.map((category) => (
                    <ContainerItems key={category.id} $imageUrl={category.url}>
                        <CategoryButton
                            onClick={() => {
                                navigate({
                                    pathname: '/cardapio', // Aqui Mostra Pra Onde Eu Quero Navegar
                                    search: `?categoria=${category.id}`, // Aqui Esta Enviando As informações De category.id
                                });
                            }}
                        >
                            {category.name}
                        </CategoryButton>

                    </ContainerItems>
                ))}
            </Carousel>

        </Container>
    );
}