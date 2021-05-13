import React from "react";
import styled from "styled-components";

import Result from "components/home/Result";
import { ITag } from "types";
import Checkbox from "components/home/Checkbox";
import HomeHeader from "components/home/HomeHeader";

interface HomePresenterProps {
    tags: ITag[];
    setTags: React.Dispatch<React.SetStateAction<ITag[]>>;
}

const HomePresenter = ({ tags, setTags }: HomePresenterProps) => {
    const dummyTag: ITag = { name: "지진", isSelect: true };

    const onSelectClick = (targetName: string) => {
        setTags((prev) =>
            prev.map(({ name, isSelect }) => {
                if (name === targetName) return { name, isSelect: !isSelect };
                else return { name, isSelect };
            })
        );
    };

    return (
        <StyledMain>
            <Result tags={tags} />
            <StyledMenu>
                <HomeHeader />

                <StyledCheckDiv>
                    {tags.map(({ name, isSelect }) => (
                        <Checkbox
                            key={name}
                            name={name}
                            isSelect={isSelect}
                            onSelectClick={onSelectClick}
                        />
                    ))}
                </StyledCheckDiv>
            </StyledMenu>
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
    padding: 32px 16px;
    background-color: ${({ theme }) => theme.colors.c100};
    /* background-color: white; */

    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
`;

const StyledCheckDiv = styled.div`
    width: 100%;
    height: auto;

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
`;
