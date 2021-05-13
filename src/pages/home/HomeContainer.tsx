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

    const onSubmit = (e: React.FormEvent) => {
        const validateEmail = (testEmail: string) => {
            const re = /^[^\s@]+@[^\s@]+$/;
            return re.test(String(testEmail).toLowerCase());
        };

        e.preventDefault();
        if (!validateEmail(email)) {
            alert("이메일을 올바르게 작성해주세요 !");
            return;
        }

        const checkedData = tags.filter((tag) => tag.isSelect === true);

        if (checkedData.length === 0) {
            alert("최소 한 가지 이상의 태그를 선택해주세요 !");
            return;
        }

        const selectedLocation = selectedCounties.map(
            (county) => county.passingName
        );

        console.log(email, checkedData, selectedLocation);

        setEmail("");
        setTags(keywordData);
        setSelectedCities(["서울특별시"]);
        setSelectedCounties([{ name: "전체", passingName: "서울특별시 전체" }]);
    };

    return (
        <HomePresenter
            tags={tags}
            setTags={setTags}
            selectedCities={selectedCities}
            setSelectedCities={setSelectedCities}
            selectedCounties={selectedCounties}
            setSelectedCounties={setSelectedCounties}
            email={email}
            setEmail={setEmail}
            onSubmit={onSubmit}
        />
    );
};

export default HomeContainer;
