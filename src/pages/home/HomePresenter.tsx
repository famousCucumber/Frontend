import styled from "styled-components";

import Result from "components/home/Result";
import { ITag } from "types";

const HomePresenter = () => {
    const dummyTag: ITag = { name: "기타", isSelect: true };

    return (
        <StyledMain>
            <Result tags={[dummyTag, dummyTag, dummyTag, dummyTag, dummyTag, dummyTag]} />
            <StyledMenu />
        </StyledMain>
    );
};

export default HomePresenter;

const StyledMain = styled.main`
    width: 100vw;
    height: 100vh;

    display: flex;
`;

const StyledMenu = styled.div`
    width: 50vw;
    height: 100vh;
    background-color: ${({ theme }) => theme.colors.c500};
`;
