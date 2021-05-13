
import styled from 'styled-components'
import { ITag } from "types";

interface CardProps {
    tag: ITag;
}

const Card = ({ tag }: CardProps) => (
    <CardContainerSection>
        <TopSection>
            <TopIconSection>{getIcon(tag.name)}</TopIconSection>
            <TopTitleSection>긴급재난문자</TopTitleSection>
        </TopSection>
        <BottomSection>
            <BottomTitleSection>긴급재난문자</BottomTitleSection>
            <BottomBodySection>{getBody(tag.name)}</BottomBodySection>
        </BottomSection>
    </CardContainerSection>
)

const getIcon = (keyword: string) => {
    switch (keyword) {
        case '강풍':
            return '💨'
        case '호우':
            return '🌧'
        case '한파':
            return '⛄️'
        case '폭염':
            return '🌞'
        case '산불':
            return '🔥'
        case '지진':
            return '🌏'
        case '미세먼지':
            return '🌫'
        case '전염병':
            return '🦠'
        case '코로나':
            return '🦠'
        case '사고':
            return '⚠️'
        case '교통량':
            return '🚦'
        default:
            return '⚠️'
    }
}

const getBody = (keyword: string) => {
    switch (keyword) {
        case '강풍':
            return '[행정안전부] 9.22. 06시00분 태풍경보,\n해안지대 접근금지, 선박대피, 농수산물, 보호행위 자제 등 피해가 없도록 주의바랍니다'
        case '호우':
            return '[국민안전처] 7.5일 09:00 서울지역 호우경보, \n산사태 상습침수 등 위험지역 대피, 외출자제 등 안전에 주의하세요'
        case '한파':
            return '[국민안전처] 1.23. 18:00 서울지역 한파경보, 동파방지, 화재예방등 피해없게 주의바랍니다'
        case '폭염':
            return '[행정안전부] 전국에 폭엽특보 발효 중, 논밭 작업, 건설현장 등 야외활동 자제, 충분한 물 마시기 등 건강에 유의바랍니다'
        case '산불':
            return '[국민안전처] 금일 13시30분 자양 선방리 산79 산불발생, 현재까지 확산중. 인근에 계신 분들은 안전한 곳으로 대피바랍니다 330-6222'
        case '지진':
            return '[기상청] 11-15 14:29 경북 포항시 북구 북쪽 6Km 지역 규모5.5 지진발생/여징 등 안전에 주의바랍니다'
        case '미세먼지':
            return '[환경부] 오늘 18시 수도권 미세먼지 비상저감조치 시행. 외출 자제, 필요시 마스크 착용 등 건강에 유의하시기 바랍니다.'
        case '전염병':
            return '[국민안전처] 메르스 예방수칙 1.자주 손 씻기\n2.기침 재채기시 입과 코 가리기\n3.발열 호흡기 증상자 접촉 피하기 등'
        case '코로나':
            return '[행정안전부] 신종 코로나바이러스감염증 예방을 위해 손씻기, 기침예절, 마스크 착용등 수칙 준수와 발열 호흡기 증상 발생시 1339 또는 보건소로 상담바랍니다.'
        case '사고':
            return '[부산광역시] 금일 현재 번영로 원동IC 부근(서울방향) 씽크홀 발생, 교통통제 중이오니 우회하시기 바랍니다.'
        case '교통량':
            return '[제주특별자치도청] 오늘06시 현재 도전역 대설로 일부도로 통제 및 결빙 발생, 대중교통 이용, 미끄럼 등 안전에 주의바랍니다'
        default:
            return '[서울시청] 코로나19 추가확진자 1명(여,49세,공릉동)발생, 격리병원 이송 및 긴급방역조치. 세부내용은 시 홈페이지와 공식SNS(블로그, 페이스북 등) 참조바랍니다'
    }
}

export default Card

const CardContainerSection = styled.section`
    height: 17%;
    width: 70%;
    display: inline-table;
    overflow: hidden;
    border-radius: 0.5em;
    background-color :rgba(255, 255, 255, 0.3);;
`

const TopSection = styled.section`
    height: 20%;
    width: 100%;
    display: inline-table;
    padding-top: 0.5em;
    padding-left: 0.9em;
`

const TopIconSection = styled.section`
    height: 100%;
    width: 7%;
    text-align: left;
    display: inline-table;
`

const TopTitleSection = styled.section`
    height: 100%;
    width: 93%;
    text-align: left;
    font-size: 0.9em;
    color: black;
    display: inline-table;
`

const BottomSection = styled.section`
    height: 80%;
    width: 100%;
    display: inline-table;
    padding-top: 0.5em;
    padding-left: 0.9em;
    padding-right: 0.9em;
    padding-bottom: 0.9em;
`

const BottomTitleSection = styled.section`
    width: 100%;
    height: 20%;
    font-size: 0.9em;
    color: black;
    font-weight: 600;
    display: inline-table;
    text-align: left;
`

const BottomBodySection = styled.section`
    width: 100%;
    height: 80%;
    font-size: 0.8em;
    color: black;
    font-weight: 500;
    display: inline-table;
    text-align: left;
`