import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import { useCart } from '../../hooks/CartContext';
import { api } from '../../services/api';
import { formatPrice } from '../../utils/formatPrice';
import { useNavigate } from 'react-router-dom';
import { Button } from '../Button';
import { Container } from "./styles";


export function CartResume() {
    const [FinalPrice, setFinalPrice] = useState(0);
    const [DeliveryTaxi] = useState(500);

    const navigate = useNavigate();

    const { cartProducts, clearCart } = useCart();

    useEffect(() => {
        const sumAllItems = cartProducts.reduce((acc, current) => {
            return current.price * current.quantity + acc;
        }, 0);

        setFinalPrice(sumAllItems);
    }, [cartProducts]);

    const SubmitOrder = async () => {
        const products = cartProducts.map((product) => {
            return { id: product.id, quantity: product.quantity, price: product.price };
        });

        try {
            const { data } = await api.post('/create-payment-intent', { products });


            clearCart();
            navigate('/Checkout', {
                state: data,
            });
        } catch (error) {
            toast.error('🦄 Wow so easy!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
        }

        // try {
        //     const { status } = await api.post(
        //         '/orders',
        //         { products },

        //         {
        //             validateStatus: () => true,

        //         });

        //     if (status === 200 || status === 201) {
        //         setTimeout(() => {
        //             navigate('/Home');
        //         }, 2000);

        //         clearCart();

        //         toast.success('Pedido Realizado com sucesso!');
        //     } else if (status === 409) {
        //         toast.error('Falha ao Realizar o Seu Pedido');
        //     } else {
        //         throw new Error("");
        //     }

        // } catch (error) {
        //     toast.error('😪 Falha no sitema! Tente Novamente');
        // }
    };



    return (
        <div>
            <Container>

                <div className='container-top'>
                    <h2 className="title">Resumo de Pedido</h2>
                    <p className="items">Itens</p>
                    <p className="items-price">{formatPrice(FinalPrice)}</p>
                    <p className="delivery-tax">Taxa de Entrega</p>
                    <p className="delivery-tax-price">{formatPrice(DeliveryTaxi)}</p>
                </div>
                <div className="container-bottom">
                    <p>Total</p>
                    <p>{formatPrice(FinalPrice + DeliveryTaxi)}</p>
                </div>

            </Container>
            <Button onClick={SubmitOrder}>Finalizar Pedido</Button>
        </div>
    )

}