'use client';
import { Saira_Stencil_One } from 'next/font/google';
import styled from 'styled-components';
import '../globals.css';
import { CartControl } from './cart-control';
import { PrimaryInputSearchIcon } from './primary-input';

const sairaStencilOne = Saira_Stencil_One({
    weight: ['400'],
    subsets: ['latin'],
});

// interface HeaderProps {

// }

const HeaderContainer = styled.header`
    width: 100%;
    height: 80px;
    background-color: #ffff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 160px;
    gap: 24px;
`;

const Logo = styled.a`
    font-size: 40px;
    line-height: 150%;
    color: var(--logo-color);
    flex: 1;
`;

export function Header(props: any) {
    return (
        <HeaderContainer>
            <Logo className={sairaStencilOne.className}>capputeeno</Logo>
            <PrimaryInputSearchIcon placeholder='Procurando por algo específico?' />
            <CartControl />
        </HeaderContainer>
    );
}
