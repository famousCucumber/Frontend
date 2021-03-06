import { ICity, ITag } from "types";

export const keywordData: ITag[] = [
    { name: "강풍", isSelect: false },
    { name: "호우", isSelect: false },
    { name: "한파", isSelect: false },
    { name: "폭염", isSelect: false },
    { name: "산불", isSelect: false },
    { name: "지진", isSelect: false },
    { name: "미세먼지", isSelect: false },
    { name: "전염병", isSelect: false },
    { name: "코로나", isSelect: false },
    { name: "사고", isSelect: false },
    { name: "교통량", isSelect: false },
    { name: "기타", isSelect: false },
];

export const citiesData: ICity[] = [
    "서울특별시",
    "인천광역시",
    "대구광역시",
    "대전광역시",
    "부산광역시",
    "울산광역시",
    "광주광역시",
    "세종특별자치시",
    "경기도",
    "강원도",
    "충청북도",
    "충청남도",
    "전라북도",
    "전라남도",
    "경상북도",
    "경상남도",
    "제주특별자치도",
];

export const countyByCityData = {
    서울특별시: [
        "전체",
        "종로구",
        "중구",
        "용산구",
        "성동구",
        "광진구",
        "동대문구",
        "중랑구",
        "성북구",
        "강북구",
        "도봉구",
        "노원구",
        "은평구",
        "서대문구",
        "마포구",
        "양천구",
        "강서구",
        "구로구",
        "금천구",
        "영등포구",
        "동작구",
        "관악구",
        "서초구",
        "강남구",
        "송파구",
        "강동구",
    ],
    인천광역시: [
        "전체",
        "중구",
        "동구",
        "미추홀구",
        "연수구",
        "남동구",
        "부평구",
        "계양구",
        "서구",
        "강화군",
        "옹진군",
    ],
    대구광역시: [
        "전체",
        "중구",
        "동구",
        "서구",
        "남구",
        "북구",
        "수성구",
        "달서구",
        "달성군",
    ],
    대전광역시: ["전체", "동구", "중구", "서구", "유성구", "대덕구"],
    부산광역시: [
        "전체",
        "중구",
        "서구",
        "동구",
        "영도구",
        "부산진구",
        "동래구",
        "남구",
        "북구",
        "해운대구",
        "사하구",
        "금정구",
        "강서구",
        "연제구",
        "수영구",
        "사상구",
        "기장군",
    ],
    울산광역시: ["전체", "중구", "남구", "동구", "북구", "울주군"],
    광주광역시: ["전체", "동구", "서구", "남구", "북구", "광산구"],
    세종특별자치시: ["전체"],
    경기도: [
        "전체",
        "고양시",
        "과천시",
        "광명시",
        "광주시",
        "구리시",
        "군포시",
        "김포시",
        "남양주시",
        "동두천시",
        "부천시",
        "성남시",
        "수원시",
        "시흥시",
        "안산시",
        "안성시",
        "안양시",
        "양주시",
        "여주시",
        "오산시",
        "용인시",
        "의왕시",
        "의정부시",
        "이천시",
        "파주시",
        "평택시",
        "포천시",
        "하남시",
        "화성시",
        "가평군",
        "양평군",
        "연천군",
    ],
    강원도: [
        "전체",
        "강릉시",
        "동해시",
        "삼척시",
        "속초시",
        "원주시",
        "춘천시",
        "태백시",
        "고성군",
        "양구군",
        "양양군",
        "영월군",
        "인제군",
        "정선군",
        "철원군",
        "평창군",
        "홍천군",
        "화천군",
        "횡성군",
    ],
    충청북도: [
        "전체",
        "제천시",
        "청주시",
        "충주시",
        "괴산군",
        "단양군",
        "보은군",
        "영동군",
        "옥천군",
        "음성군",
        "증평군",
        "진천군",
    ],
    충청남도: [
        "전체",
        "계룡시",
        "공주시",
        "논산시",
        "당진시",
        "보령시",
        "서산시",
        "아산시",
        "천안시",
        "금산군",
        "부여군",
        "서천군",
        "예산군",
        "청양군",
        "태안군",
        "홍성군",
    ],
    전라북도: [
        "전체",
        "군산시",
        "김제시",
        "남원시",
        "익산시",
        "전주시",
        "정읍시",
        "고창군",
        "무주군",
        "부안군",
        "순창군",
        "완주군",
        "임실군",
        "장수군",
        "진안군",
    ],
    전라남도: [
        "전체",
        "광양시",
        "나주시",
        "목포시",
        "순천시",
        "여수시",
        "강진군",
        "고흥군",
        "곡성군",
        "구례군",
        "담양군",
        "무안군",
        "보성군",
        "신안군",
        "영광군",
        "영암군",
        "완도군",
        "장성군",
        "장흥군",
        "진도군",
        "함평군",
        "해남군",
        "화순군",
    ],
    경상북도: [
        "전체",
        "경산시",
        "경주시",
        "구미시",
        "김천시",
        "문경시",
        "상주시",
        "안동시",
        "영주시",
        "영천시",
        "포항시",
        "고령군",
        "군위군",
        "봉화군",
        "성주군",
        "영덕군",
        "영양군",
        "예천군",
        "울릉군",
        "울진군",
        "의성군",
        "청도군",
        "청송군",
        "칠곡군",
    ],
    경상남도: [
        "전체",
        "거제시",
        "김해시",
        "밀양시",
        "사천시",
        "양산시",
        "진주시",
        "창원시",
        "통영시",
        "거창군",
        "고성군",
        "남해군",
        "산청군",
        "의령군",
        "창녕군",
        "하동군",
        "함안군",
        "함양군",
        "합천군",
    ],
    제주특별자치도: ["전체", "서귀포시", "제주시"],
};
