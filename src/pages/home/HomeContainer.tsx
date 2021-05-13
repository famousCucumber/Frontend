import { useState } from "react";

import { keywordData, citiesData } from "data";
import { ITag } from "types";
import HomePresenter from "./HomePresenter";

const HomeContainer = () => {
    const [tags, setTags] = useState<ITag[]>(keywordData);

    const [cities, setCities] = useState<string[]>(citiesData);

    const [email, setEmail] = useState<string>("");

    return <HomePresenter tags={tags} setTags={setTags} />;
};

export default HomeContainer;
