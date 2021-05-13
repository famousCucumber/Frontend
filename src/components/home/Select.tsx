import styled from "styled-components";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import { citiesData, countyByCityData } from "data";
import { ICity, ICounty } from "types";

const TRANSITION_NAME: string = "select";

interface SelectProps {
    selectedCities: ICity[];
    selectedCounties: ICounty[];
    onCityClick: (targetIndex: number, targetCity: string) => void;
    onCountyClick: (targetIndex: number, targetCounty: string) => void;
    onPlusClick: () => void;
    onMinusClick: (targetIndex: number) => void;
}

const Select = ({
    selectedCities,
    selectedCounties,
    onCityClick,
    onCountyClick,
    onPlusClick,
    onMinusClick,
}: SelectProps) => {
    return (
        <SelectWrapper>
            <TransitionGroup
                style={{
                    width: "100%",
                    height: "auto",
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                }}
            >
                {selectedCities.map((city, index) => {
                    return (
                        <CSSTransition
                            key={index}
                            timeout={500}
                            classNames={TRANSITION_NAME}
                        >
                            <SelectSection key={index}>
                                <SelectedCity isCity={true}>
                                    {city}

                                    <CandidateCity>
                                        {citiesData.map((city, cityIndex) => (
                                            <CandidateSpan
                                                key={cityIndex}
                                                onClick={() => {
                                                    onCityClick(index, city);
                                                }}
                                            >
                                                {city}
                                            </CandidateSpan>
                                        ))}
                                    </CandidateCity>
                                </SelectedCity>

                                <SelectedCity isCity={false}>
                                    {selectedCounties[index].name}

                                    <CandidateCity>
                                        {countyByCityData[city].map(
                                            (county, countyIndex) => (
                                                <CandidateSpan
                                                    key={countyIndex}
                                                    onClick={() => {
                                                        onCountyClick(
                                                            index,
                                                            county
                                                        );
                                                    }}
                                                >
                                                    {county}
                                                </CandidateSpan>
                                            )
                                        )}
                                    </CandidateCity>
                                </SelectedCity>
                                {selectedCities.length < 5 &&
                                index === selectedCities.length - 1 ? (
                                    <PlusButton
                                        isFirst={selectedCities.length === 1}
                                        onClick={onPlusClick}
                                    >
                                        +
                                    </PlusButton>
                                ) : null}

                                {selectedCities.length >= 2 ? (
                                    <MinusButton
                                        onClick={() => {
                                            onMinusClick(index);
                                        }}
                                    >
                                        -
                                    </MinusButton>
                                ) : null}
                            </SelectSection>
                        </CSSTransition>
                    );
                })}
            </TransitionGroup>
        </SelectWrapper>
    );
};

export default Select;

const SelectWrapper = styled.div`
    width: 100%;
    height: auto;

    display: flex;
    flex-direction: column;
    gap: 12px;

    ${({ theme }) => theme.sizes.mobile} {
        margin-bottom: 20px;
    }
`;

const SelectSection = styled.section`
    position: relative;
    width: 100%;
    height: 60px;
    border-radius: 12px;
    /* border: ${({ theme }) => theme.borderSetting}; */
    display: flex;

    transition: all 0.5s;

    &.${TRANSITION_NAME}-enter {
        opacity: 0;
        transform: translateX(20px);
    }

    &.${TRANSITION_NAME}-enter-active {
        opacity: 1;
        transform: translateX(0);
    }

    &.${TRANSITION_NAME}-exit {
        opacity: 1;
        transform: translateX(0);
    }

    &.${TRANSITION_NAME}-exit-active {
        opacity: 0;
        transform: translateX(20px);
    }

    ${({ theme }) => theme.sizes.mobile} {
        height: 40px;
    }
`;

const SelectedCity = styled.div<{ isCity: boolean }>`
    position: relative;
    width: 50%;
    height: 100%;

    border-radius: ${({ isCity }) =>
        isCity ? "12px 0px 0px 12px" : "0px 12px 12px 0px"};

    border: ${({ theme }) => theme.borderSetting};
    ${({ isCity }) => (isCity ? "" : "border-left: none;")}

    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.colors.c500};

    transition: all 0.3s;

    &:hover {
        background-color: ${({ theme }) => theme.colors.c500};
        color: white;
    }
`;

const CandidateCity = styled.div`
    z-index: 9;
    position: absolute;
    top: 110%;
    left: 0;

    width: 100%;
    height: 220px;
    padding: 10px 12px;
    overflow: scroll;

    display: flex;
    flex-direction: column;
    gap: 10px;

    color: black;
    background-color: white;

    visibility: hidden;
    opacity: 0;
    transform: translateY(5%);
    transition: all 0.3s;

    ${SelectedCity}:hover > & {
        visibility: visible;
        opacity: 1;
        transform: translateY(0);
    }

    ${({ theme }) => theme.sizes.mobile} {
        height: 140px;
        top: -140px;
    }
`;

const CandidateSpan = styled.span`
    position: relative;
    width: auto;

    cursor: pointer;
    transition: color 0.4s;

    &::after {
        content: "";
        position: absolute;
        top: 100%;
        left: 0;

        width: 70%;
        height: 3px;
        background-color: ${({ theme }) => theme.colors.c500};

        transform: scaleX(0);
        transform-origin: left;
        transition: transform 0.4s;
    }

    &:hover {
        color: ${({ theme }) => theme.colors.c500};
    }
    &:hover::after {
        transform: scaleX(1);
    }
`;

const SelectButton = styled.button`
    all: unset;
    position: absolute;

    width: 50px;
    height: 50px;
    border-radius: 50%;
    /* border: solid 2px ${({ theme }) => theme.colors.c500}; */
    border: ${({ theme }) => theme.borderSetting};
    background-color: white;

    font-size: 24px;
    text-align: center;

    cursor: pointer;
    transition: transform 1s;

    &:hover {
        transform: rotate(360deg);
    }

    ${({ theme }) => theme.sizes.mobile} {
        width: 40px;
        height: 40px;
    }
`;

const PlusButton = styled(SelectButton)<{ isFirst: boolean }>`
    bottom: -10px;
    right: ${({ isFirst }) => (isFirst ? "-10px" : "30px")};
`;

const MinusButton = styled(SelectButton)`
    bottom: -10px;
    right: -10px;
`;
