import { useNavigate, useResolvedPath } from "react-router-dom";
import { UserCircleIcon, ShoppingCartIcon } from '@phosphor-icons/react';
import { useUser } from '../../hooks/UserContext'

import {
    Container,
    HeaderLink,
    LinkContainer,
    Navigation,
    Options,
    Content,
    Profile,
    Logout
} from "./styles";


export function Header() {
    const navigate = useNavigate();
    const { logout, userInfo } = useUser();
    const { pathname } = useResolvedPath();

    function logoutUser() {
        logout();
        navigate('/Login');
    }

    return (
        <Container>
            <Content>
                <Navigation>
                    <div>
                        <HeaderLink to='/Home' $isActive={pathname === '/Home'}>
                            Home
                        </HeaderLink>
                        <hr></hr>
                        <HeaderLink to='/cardapio' $isActive={pathname === '/cardapio'}>
                            Cardápio
                        </HeaderLink>
                    </div>
                </Navigation>
                <Options>
                    <Profile>
                        <UserCircleIcon color="#ffff" size={24} />
                        <div>
                            <p>
                                Olá, <span>{userInfo.name}</span>
                            </p>
                            <Logout onClick={logoutUser}>Sair</Logout>
                        </div>
                    </Profile>
                    <LinkContainer>
                        <ShoppingCartIcon color="#ffff" size={24} />
                        <HeaderLink to='/Carrinho' $isActive={pathname === '/Carrinho'}>Carrinho</HeaderLink>
                    </LinkContainer>
                </Options>
            </Content>

        </Container>
    );

} 