import React from "react";
import styled from "styled-components";

import Result from "components/home/Result";
import { ICity, ICityWithCounties, ICounty, ITag } from "types";
import Checkbox from "components/home/Checkbox";
import HomeHeader from "components/home/HomeHeader";

import { citiesData, countyByCityData } from "data";

interface HomePresenterProps {
    tags: ITag[];
    setTags: React.Dispatch<React.SetStateAction<ITag[]>>;

    selectedCities: ICity[];
    setSelectedCities: React.Dispatch<React.SetStateAction<ICity[]>>;
    selectedCounties: ICounty[];
    setSelectedCounties: React.Dispatch<React.SetStateAction<ICounty[]>>;
}

const HomePresenter = ({
    tags,
    setTags,
    selectedCities,
    selectedCounties,
    setSelectedCities,
    setSelectedCounties,
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
                        passingName: `${SelectedCity[targetIndex]} ${targetCounty}`,
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

                {/* <div>{cityWithCounties.map((city) => city.name)}</div> */}

                {selectedCities.map((city, index) => {
                    return (
                        <SelectSection key={index}>
                            <SelectedCity>
                                {city}

                                <CandidateCity>
                                    {citiesData.map((city, cityIndex) => (
                                        <span
                                            key={cityIndex}
                                            onClick={() => {
                                                onCityClick(index, city);
                                            }}
                                        >
                                            {city}
                                        </span>
                                    ))}
                                </CandidateCity>
                            </SelectedCity>

                            <SelectedCity>
                                {selectedCounties[index].name}

                                <CandidateCity>
                                    {countyByCityData[city].map(
                                        (county, countyIndex) => (
                                            <span
                                                key={countyIndex}
                                                onClick={() => {
                                                    onCountyClick(
                                                        index,
                                                        county
                                                    );
                                                }}
                                            >
                                                {county}
                                            </span>
                                        )
                                    )}
                                </CandidateCity>
                            </SelectedCity>
                            {selectedCities.length < 5 &&
                            index === selectedCities.length - 1 ? (
                                <button onClick={onPlusClick}>+</button>
                            ) : null}

                            {selectedCities.length >= 2 ? (
                                <button
                                    onClick={() => {
                                        onMinusClick(index);
                                    }}
                                >
                                    -
                                </button>
                            ) : null}
                        </SelectSection>
                    );
                })}
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

const SelectSection = styled.section`
    width: 100%;
    height: 100px;
    background-color: white;

    display: flex;
`;

const SelectedCity = styled.div`
    position: relative;
    width: 40%;
    height: 100%;

    background-color: green;
`;

const CandidateCity = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;

    width: 100%;
    height: auto;
    background-color: white;

    opacity: 0;

    ${SelectedCity}:hover > & {
        opacity: 1;
    }
`;
