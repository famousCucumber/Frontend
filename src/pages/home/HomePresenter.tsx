import styled from "styled-components";

const HomePresenter = () => {
    return <MainDiv>home</MainDiv>;
};

export default HomePresenter;

const MainDiv = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: ${({ theme }) => theme.colors.c100};
`;
