import { useState } from "react";

import { keywordData } from "data";
import { ICity, ICounty, ITag } from "types";
import HomePresenter from "./HomePresenter";

const HomeContainer = () => {
    const [tags, setTags] = useState<ITag[]>(keywordData);

    const [selectedCities, setSelectedCities] = useState<ICity[]>([
        "서울특별시",
    ]);
    const [selectedCounties, setSelectedCounties] = useState<ICounty[]>([
        { name: "전체", passingName: "서울특별시 전체" },
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
            selectedCities={selectedCities}
            setSelectedCities={setSelectedCities}
            selectedCounties={selectedCounties}
            setSelectedCounties={setSelectedCounties}
        />
    );
};

export default HomeContainer;
