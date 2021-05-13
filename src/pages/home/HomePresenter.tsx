import React from "react";
import styled from "styled-components";

import Result from "components/home/Result";
import { ICity, ICounty, ITag } from "types";
import Checkbox from "components/home/Checkbox";
import HomeHeader from "components/home/HomeHeader";

import { countyByCityData } from "data";
import Select from "components/home/Select";
import Email from "components/home/Email";

interface HomePresenterProps {
    tags: ITag[];
    setTags: React.Dispatch<React.SetStateAction<ITag[]>>;
    selectedCities: ICity[];
    setSelectedCities: React.Dispatch<React.SetStateAction<ICity[]>>;
    selectedCounties: ICounty[];
    setSelectedCounties: React.Dispatch<React.SetStateAction<ICounty[]>>;
    email: string;
    setEmail: React.Dispatch<React.SetStateAction<string>>;
    onSubmit: (e: React.FormEvent) => void;
}

const HomePresenter = ({
    tags,
    setTags,
    selectedCities,
    selectedCounties,
    setSelectedCities,
    setSelectedCounties,
    email,
    setEmail,
    onSubmit,
}: HomePresenterProps) => {
    const onSelectClick = (targetName: string) => {
        setTags((prev) =>
            prev.map(({ name, isSelect }) => {
                if (name === targetName) return { name, isSelect: !isSelect };
                else return { name, isSelect };
            })
        );
    };

    const onCityClick = (targetIndex: number, targetCity: string) => {
        setSelectedCities((prev) =>
            prev.map((name, index) => {
                if (index === targetIndex) return targetCity as ICity;
                else return name;
            })
        );

        setSelectedCounties((prev) =>
            prev.map((data, index) => {
                if (index === targetIndex) {
                    const tempCounty: string =
                        countyByCityData[targetCity as ICity][0];
                    return {
                        name: tempCounty,
                        passingName: `${targetCity} ${tempCounty}`,
                    };
                } else return data;
            })
        );
    };

    const onCountyClick = (targetIndex: number, targetCounty: string) => {
        setSelectedCounties((prev) =>
            prev.map((data, index) => {
                if (index === targetIndex)
                    return {
                        name: targetCounty,
                        passingName: `${selectedCities[targetIndex]} ${targetCounty}`,
                    };
                else return data;
            })
        );
    };

    const onPlusClick = () => {
        setSelectedCities((prev) => [...prev, "서울특별시"]);
        setSelectedCounties((prev) => [
            ...prev,
            { name: "전체", passingName: "서울특별시 전체" },
        ]);
    };

    const onMinusClick = (targetIndex: number) => {
        setSelectedCities((prev) =>
            prev.filter((_, index) => index !== targetIndex)
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
                <Select
                    selectedCities={selectedCities}
                    selectedCounties={selectedCounties}
                    onCityClick={onCityClick}
                    onCountyClick={onCountyClick}
                    onPlusClick={onPlusClick}
                    onMinusClick={onMinusClick}
                />

                <Email email={email} setEmail={setEmail} onSubmit={onSubmit} />
            </StyledMenu>
        </StyledMain>
    );
};

export default HomePresenter;

const StyledMain = styled.main`
    width: 100vw;
    height: 100vh;
    display: flex;

    ${({ theme }) => theme.sizes.mobile} {
        flex-direction: column;
    }
`;

const StyledMenu = styled.div`
    width: 40vw;
    height: 100vh;
    padding: 32px 20px;
    background-color: ${({ theme }) => theme.colors.c100};
    /* background-color: white; */

    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    gap: 32px;

    ${({ theme }) => theme.sizes.mobile} {
        width: 100vw;
        height: 64vh;
        padding: 12px 18px;
        gap: 1em;
    }
`;

const StyledCheckDiv = styled.div`
    width: 100%;
    height: auto;

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
`;
