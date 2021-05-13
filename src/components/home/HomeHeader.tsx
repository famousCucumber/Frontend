import styled from "styled-components";

const HomeHeader = () => {
    return (
        <StyledHeader>
            <StyledH1>재문골</StyledH1>
            <StyledP>내가 원하는 재난문자, 골라받자</StyledP>
        </StyledHeader>
    );
};

export default HomeHeader;

const StyledHeader = styled.header`
    width: 100%;
    height: auto;
    margin-bottom: 16px;
`;

const StyledH1 = styled.h1`
    font-size: 22px;
    color: ${({theme}) => theme.colors.c500};
`;

const StyledP = styled.p`
    font-size: 14px;
    opacity: 0.6;
`;
