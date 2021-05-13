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
                type="text"
                onChange={onChange}
                value={email}
            />
            <EmailLabel htmlFor="email">E-mail</EmailLabel>
            <EmailOverSpan></EmailOverSpan>
            <EmailSpan></EmailSpan>
            <SubmitButton type="submit" onClick={onSubmit}>
                {">"}
            </SubmitButton>
        </EmailDiv>
    );
};

export default Email;

const EmailDiv = styled.div`
    position: relative;
    width: 100%;
    height: 50px;
    justify-self: flex-end;
    margin-top: auto;
`;

const EmailInput = styled.input`
    all: unset;
    width: 100%;
    height: 100%;
`;

const EmailLabel = styled.label`
    position: absolute;
    top: 30%;
    left: 0;

    transition: transform 0.3s;
    transform-origin: left;

    ${EmailInput}:valid ~ &,
    ${EmailInput}:focus ~ & {
        transform: translateY(-100%) scale(0.8);
    }
    ${({ theme }) => theme.sizes.mobile} {
        font-size: 12px;
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

    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s;

    ${EmailInput}:valid ~ &,
    ${EmailInput}:focus ~ & {
        transform: scaleX(1);
    }
`;

const SubmitButton = styled.button`
    all: unset;
    position: absolute;
    bottom: -10px;
    right: -10px;

    z-index: 4;
    cursor: pointer;

    width: 50px;
    height: 50px;
    background-color: white;
    text-align: center;
    font-size: 22px;

    border-radius: 50%;
    border: solid 2px ${({ theme }) => theme.colors.c500};
    ${({ theme }) => theme.sizes.mobile} {
        width: 40px;
        height: 40px;
    }
`;
