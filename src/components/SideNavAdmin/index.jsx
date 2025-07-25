import { NavLinks } from "./NavLinks";
import Logo from '../../assets/Logo 1.svg';

import { Container, Footer, NavLink, NavLinkContainer } from "./style";
import { useUser } from "../../hooks/UserContext";
import { SignOutIcon } from "@phosphor-icons/react";
import { useResolvedPath } from "react-router-dom";

export function SideNavAdmin() {
    const { logout } = useUser();
    const { pathname } = useResolvedPath();
    return (
        <Container>
            <img src={Logo} alt="Hamburger Logo Devburger" />
            <NavLinkContainer>
                {NavLinks.map(link => (
                    <NavLink
                        key={link.id}
                        to={link.path}
                        $isActive={pathname === link.path}
                    >
                        {link.icon}
                        <span>{link.label}</span>
                    </NavLink>
                ))}
            </NavLinkContainer>
            <Footer>
                <NavLink to='/Login' onClick={logout}>
                    <SignOutIcon />
                    <span>Sair</span>
                </NavLink>
            </Footer>
        </Container>
    );
}