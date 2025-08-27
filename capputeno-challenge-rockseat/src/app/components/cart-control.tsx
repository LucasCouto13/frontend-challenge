import styled from 'styled-components';
import { ShoppingBag } from '../../../public/icons/shopping-bag';
import { useLocalStorage } from '../hooks/useLocalStorage';

const CartContainer = styled.div`
    display: flex;
    align-items: center;
    position: relative;
`;

const ItemsInCart = styled.div`
    width: 17px;
    height: 17px;
    border-radius: 50%;
    background-color: var(--delete-color);
    color: #fff;
    font-size: 12px;
    line-height: 160%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 16px;
    left: 13px;
`;

export function CartControl() {
    const { value } = useLocalStorage<[]>('cart-items');

    return (
        <CartContainer>
            <ShoppingBag />
            {value?.length && (
                <ItemsInCart>
                    {value.length > 99 ? '99' : value.length}
                </ItemsInCart>
            )}
        </CartContainer>
    );
}
