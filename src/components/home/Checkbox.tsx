import React from "react";
import styled from "styled-components";

import { ITag } from "types";

interface CheckboxProps extends ITag {
    onSelectClick: (targetName: string) => void;
}

const Checkbox = ({ name, isSelect, onSelectClick }: CheckboxProps) => {
    return (
        <React.Fragment>
            <StyledInput
                id={name}
                type="checkbox"
                checked={isSelect}
                onChange={() => {
                    onSelectClick(name);
                }}
            />
            <StyledLabel htmlFor={name}>{name}</StyledLabel>
        </React.Fragment>
    );
};

export default Checkbox;

const StyledInput = styled.input`
    display: none;
`;

const StyledLabel = styled.label`
    width: auto;
    height: 30px;
    padding: 10px 6px;

    border-radius: 12px;
    border: ${({ theme }) => theme.borderSetting};
    color: ${({ theme }) => theme.colors.c500};
    background-color: ${({ theme }) => theme.colors.c100};
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;

    transition: all 0.3s;

    &:hover {
        color: ${({ theme }) => theme.colors.c100};
        background-color: ${({ theme }) => theme.colors.c500};
    }

    ${StyledInput}:checked + & {
        color: ${({ theme }) => theme.colors.c100};
        background-color: ${({ theme }) => theme.colors.c700};
        border-color: ${({ theme }) => theme.colors.c700};
    }
`;
