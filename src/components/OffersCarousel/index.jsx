import { useEffect, useState } from "react";
import Carousel from 'react-multi-carousel';


import 'react-multi-carousel/lib/styles.css';

import { api } from "../../services/api";
import { Container, Title } from './styles';
import { formatPrice } from "../../utils/formatPrice";
import { CardProduct } from "../CardProduct";



export function OffersCarousel() {
    const [offers, setoffers] = useState([]);
    useEffect(() => {

        async function loadproducts() {
            const { data } = await api.get('/products');

            const onlyOffers = data
            .filter((product) => product.offer )
            .map((product) => ({
                currencyValue: formatPrice(product.price),
                ...product,
            }));

            setoffers(onlyOffers)
            
        }
        loadproducts();
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
            <Title>OFERTAS DO DIA</Title>
             <Carousel
                responsive={responsive}
                infinite={true}
                partialVisible={false}
                itemClass="Carousel-item"

            >
                {offers.map((product) => (

                    <CardProduct key={product.id} product={product}/>
                        
                   
                ))}
            </Carousel> 

        </Container>
    );
}