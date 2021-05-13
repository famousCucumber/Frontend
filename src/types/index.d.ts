export interface ITag {
    name: string;
    isSelect: boolean;
}

export interface ICityWithCounties {
    name: string;
    counties: ICounty[];
}

export interface ICounty {
    name: any;
    passingName: string;
}

export interface ISaveData {
    email: string;
    cityList: string[];
    countyList: string[];
    selectList: string[];
}

export type ICity =
    | "서울특별시"
    | "인천광역시"
    | "대구광역시"
    | "대전광역시"
    | "부산광역시"
    | "울산광역시"
    | "광주광역시"
    | "세종특별자치시"
    | "경기도"
    | "강원도"
    | "충청북도"
    | "충청남도"
    | "전라북도"
    | "전라남도"
    | "경상북도"
    | "경상남도"
    | "제주특별자치도";

export interface ICountyByCityData {
    서울특별시: string[];
    인천광역시: string[];
    대구광역시: string[];
    대전광역시: string[];
    부산광역시: string[];
    울산광역시: string[];
    광주광역시: string[];
    세종특별자치시: string[];
    경기도: string[];
    강원도: string[];
    충청북도: string[];
    충청남도: string[];
    전라북도: string[];
    전라남도: string[];
    경상북도: string[];
    경상남도: string[];
    제주특별자치도: string[];
}
