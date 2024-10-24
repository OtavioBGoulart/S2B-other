import styled from "styled-components";
import { useState } from "react";
import { Menu } from "lucide-react";
import { useScroll } from "../hooks/useRef";

type SubmenuType = "solutions" | "about" | "contacts" | "mobile" | null;

export function Navbar() {
    const { scrollTo, contatosRef, aboutRef, solutionsRef } = useScroll();
    const [openSubmenu, setOpenSubmenu] = useState<SubmenuType>(null);

    function handleSubmenuToggle(menu: SubmenuType) {
        setOpenSubmenu(menu === openSubmenu ? null : menu);
    };

    return (
        <Container>
            <Header>
                <img src="/marca-images/logos2b.svg" />
                <div>
                    <NavItem onClick={() => scrollTo(solutionsRef)}>Soluções</NavItem>
                    <NavItem onClick={() => scrollTo(aboutRef)}>Sobre</NavItem>
                    <NavItem onClick={() => scrollTo(contatosRef)}>Contato</NavItem>
                </div>
            </Header>

            {/* Ícone do menu mobile */}
            <MenuItem>
                <Menu onClick={() => handleSubmenuToggle("mobile")} />
                {openSubmenu === "mobile" && (
                    <MobileMenu>
                        <SubmenuItem onClick={() => scrollTo(solutionsRef)}>Home</SubmenuItem>
                        <SubmenuItem onClick={() => scrollTo(aboutRef)}>Sobre</SubmenuItem>
                        <SubmenuItem onClick={() => scrollTo(contatosRef)}>Contato</SubmenuItem>
                    </MobileMenu>
                )}
            </MenuItem>
        </Container>
    );
}

const Header = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;

    img {
        width: 150px;
        height: 200px;
        cursor: pointer;
    }

    div {
        display: flex;
        justify-content: flex-end;
        gap: 20px;
    }

    @media (max-width: 768px) {
        width: 100%;
        justify-content: center;

        div {
            display: none;
        }
    }
`;

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 90px;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.secondary.light};
    padding: 10px 0;
    top: 0;
    margin: 0; /* Garante que não tenha margens */
    position: relative; /* Para o posicionamento do menu mobile */
`;

const NavItem = styled.span`
    position: relative;
    color: ${({ theme }) => theme.colors.primary.light};
    font-size: ${({ theme }) => theme.fontSizes.medium};
    font: ${({ theme }) => theme.fonts.heading};
    font-weight: 400;
    cursor: pointer;

    &:hover {
        color: ${({ theme }) => theme.colors.primary.lighter};
        filter: brightness(100%);
    }
`;

const SubmenuItem = styled.span`
    color: ${({ theme }) => theme.colors.secondary.light};
    font-size: ${({ theme }) => theme.fontSizes.small};
    padding: 10px;
    cursor: pointer;

    &:hover {
        background-color: ${({ theme }) => theme.colors.secondary.light};
        border-radius: 10px;
        color: ${({ theme }) => theme.colors.primary.light};
    }
`;

const MenuItem = styled.div`
    display: none;

    @media (max-width: 768px) {
        display: block;
        font-size: 1.5rem;
        cursor: pointer;
    }

    svg {
        width: 30px;    
        height: 30px;
        fill: ${({ theme }) => theme.colors.primary.light};
    }
`;

// Submenu para dispositivos móveis
const MobileMenu = styled.div`
    position: absolute;
    top: 20;
    right: 15px;
    background-color: ${({ theme }) => theme.colors.primary.light};
    border-radius: 5px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    z-index: 100;
    display: flex;
    flex-direction: column;
    padding: 10px;
    width: 200px;
`;
