import styled from "styled-components";
import { ITag } from "types";
import Card from "components/home/Card";
import FadeIn from 'react-fade-in';

interface ResultProps {
    tags: ITag[];
}
const Result = ({ tags }: ResultProps) => {
    return (
        <StyleSection>
            <TimeSection>
                {getCurrentTime()}
            </TimeSection>
            <DateSection>
                {getCurrentDate()}
            </DateSection>
            <EmptyBlock/>
            <FadeIn>
            {tags.map((tag, index) => 
                    tag.isSelect 
                    ? <Card key={`${index}${tag.name}`} tag={tag}></Card>
                    : <></>
                )
            }
            </FadeIn>
        </StyleSection>
    );
};

const getCurrentTime = () => {
    let today = new Date();
    const hour = today.getHours().toString().padStart(2, '0');
    const minute = today.getMinutes().toString().padStart(2, '0');
    return `${hour}:${minute}`
}

const getCurrentDate = () => {
    let today = new Date();
    const weekdayArray = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
    const month = today.getMonth() + 1;
    const day = today.getDate().toString().padStart(2, '0');
    const weekday = weekdayArray[today.getDay()];
    return `${month}월 ${day}일 ${weekday}`
}

export default Result;

const EmptyBlock = styled.section`
    height: 5%;
`

const TimeSection = styled.section`
    text-align: center;
    color: black;
    font-size: 5em;
    font-weight: 200;
`

const DateSection = styled.section`
    text-align: center;
    color: black;
    font-size: 2em;
    font-weight: 100;
`

const StyleSection = styled.section`

    width: 60vw;
    height: 100vh;
    /* background-color: ${({ theme }) => theme.colors.c100}; */
    background-color: white;
`;
