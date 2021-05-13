import { useState, useEffect } from "react";

import { keywordData, citiesData, countyByCityData } from "data";
import {
    ICity,
    ICityWithCounties,
    ICounty,
    ICountyByCityData,
    ITag,
} from "types";
import HomePresenter from "./HomePresenter";

const HomeContainer = () => {
    const [tags, setTags] = useState<ITag[]>(keywordData);
    const [cityWithCounties, setCityWithCounites] = useState<
        ICityWithCounties[]
    >([]);

    const [selectedCities, setSelectedCities] = useState<ICity[]>([
        "서울특별시",
    ]);
    const [selectedCounties, setSelectedCounties] = useState<ICounty[]>([
        { name: "강남구", passingName: "서울특별시 강남구" },
    ]);
    const [email, setEmail] = useState<string>("");

    // useEffect(() => {
    //     setCityWithCounites([]);

    //     citiesData.map((city) => {
    //         const counties = countyByCityData[city as ICity];
    //         const tempCounties: ICounty[] = [];
    //         counties.map((county) => {
    //             tempCounties.push({
    //                 name: county,
    //                 passingName: `${city} ${county}`,
    //                 isSelect: false,
    //             });
    //         });

    //         setCityWithCounites((prev) => [
    //             ...prev,
    //             { name: city, counties: tempCounties },
    //         ]);
    //     });
    // }, []);

    return (
        <HomePresenter
            tags={tags}
            setTags={setTags}
            cityWithCounties={cityWithCounties}
            selectedCities={selectedCities}
            setSelectedCities={setSelectedCities}
            selectedCounties={selectedCounties}
            setSelectedCounties={setSelectedCounties}
        />
    );
};

export default HomeContainer;
