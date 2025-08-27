import styled from 'styled-components';
import { SearchIcon } from '../../../public/icons/search-icon';
import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = styled.input`
    width: 352px;
    opacity: 1;
    border-radius: 8px;
    background: var(--bg-secundary);
    padding: 10px 16px;
    border: none;

    color: var(--text-dark);
    font-family: inherit;
    line-height: 22px;
    font-size: var(--input-font-size);
    font-weight: 400;
`;

const InputContainer = styled.div`
    position: relative;
    width: 352px;

    svg {
        position: absolute;
        top: 50%;
        right: 20px;
        transform: translateY(-50%);
    }
`;

export function PrimaryInput(props: InputProps) {
    return <Input {...props} />;
}

export function PrimaryInputSearchIcon(props: InputProps) {
    return (
        <InputContainer>
            <Input {...props} />
            <SearchIcon />
        </InputContainer>
    );
}
