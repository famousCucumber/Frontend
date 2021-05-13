import React from "react";
import styled from "styled-components";

interface EmailProps {
    email: string;
    setEmail: React.Dispatch<React.SetStateAction<string>>;
    onSubmit: (e: React.FormEvent) => void;
}

const Email = ({ email, setEmail, onSubmit }: EmailProps) => {
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    return (
        <EmailDiv>
            <EmailInput
                required
                id="email"
                type="email"
                onChange={onChange}
                value={email}
            />
            <EmailLabel htmlFor="email">soma@gmail.com</EmailLabel>
            <EmailOverSpan></EmailOverSpan>
            <EmailSpan></EmailSpan>
            <button type="submit" onClick={onSubmit}>
                submit
            </button>
        </EmailDiv>
    );
};

export default Email;

const EmailDiv = styled.div`
    position: relative;
    width: 100%;
    height: 50px;
`;

const EmailInput = styled.input`
    all: unset;
    width: 100%;
    height: 100%;
    background-color: white;
`;

const EmailLabel = styled.label`
    position: absolute;
    top: 30%;
    left: 0;

    ${EmailInput}:valid ~ & {
        top: 0;
    }    
`;

const EmailSpan = styled.span`
    position: absolute;
    z-index: 1;
    bottom: 0;
    left: 0;

    width: 100%;
    height: 3px;
    background-color: ${({ theme }) => theme.colors.c500};
    opacity: 0.3;
`;

const EmailOverSpan = styled.span`
    position: absolute;
    z-index: 2;
    bottom: 0;
    left: 0;

    width: 100%;
    height: 3px;
    background-color: ${({ theme }) => theme.colors.c500};

    transform: translateX(0);
    transform-origin: left;
    transition: transform 0.3s;
`;
