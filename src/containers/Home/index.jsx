import { Banner, Conteiner } from './styles';
import { CategoriesCarousel, OffersCarousel } from '../../components';


export function Home() {

    return (
        <main>
            <Banner>
                <h1>Bem-vindo(a)!</h1>
            </Banner>
            <Conteiner>
                <div>
                    <CategoriesCarousel />
                    <OffersCarousel />
                    <div>Carrosel Produtos</div>
                </div>

            </Conteiner>
        </main>
    );
}