import { useState } from "react";
import axios from "axios";

import { countyByCityData, keywordData } from "data";
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

    const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

    const onSubmit = async (e: React.FormEvent) => {
        const validateEmail = (testEmail: string) => {
            const re = /^[^\s@]+@[^\s@]+$/;
            return re.test(String(testEmail).toLowerCase());
        };

        e.preventDefault();
        if (!validateEmail(email)) {
            alert("이메일을 올바르게 작성해주세요 !");
            return;
        }

        const checkedTag = tags.filter((tag) => tag.isSelect === true);

        if (checkedTag.length === 0) {
            alert("최소 한 가지 이상의 태그를 선택해주세요 !");
            return;
        }
        const fetchingTags: string[] = [];
        checkedTag.map((tag) => {
            fetchingTags.push(tag.name);
            return null;
        });

        const fetchingCounties: string[] = [];
        selectedCounties.map((county, index) => {
            if (county.name === "전체") {
                const tempCity = selectedCities[index];
                for (let tempCounty of countyByCityData[tempCity]) {
                    if (tempCounty !== "전체")
                        fetchingCounties.push(`${tempCity} ${tempCounty}`);
                }
            } else {
                fetchingCounties.push(county.passingName);
            }
            return null;
        });

        console.log(email, fetchingTags, fetchingCounties);
        const data = await axios({
            method: "post",
            url: "https://famouscucumber-ojebi.run.goorm.io/user/register",
            data: {
                email,
                locationList: fetchingTags,
                selectList: fetchingTags,
            },
        }).then((res) => {
            if (res.status === 200) setIsOpenModal(true);
            return res;
        });
        console.log(data);

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
            isOpenModal={isOpenModal}
            setIsOpenModal={setIsOpenModal}
        />
    );
};

export default HomeContainer;
