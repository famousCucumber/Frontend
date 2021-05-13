export interface ITag {
    name: string;
    isSelect: boolean;
}

export interface ICounty {
    name: string;
    isSelect: boolean;
}

export interface ISaveData {
    email: string;
    cityList: string[];
    countyList: string[];
    selectList: string[];
}
