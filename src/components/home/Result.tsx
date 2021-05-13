import styled from "styled-components";
import { ITag } from "types";

interface ResultProps {
    tags: ITag[];
}
const Result = ({ tags }: ResultProps) => {
    return <StyleSection></StyleSection>;
};

export default Result;

const StyleSection = styled.section`
    text-align: center;

    width: 60vw;
    height: 100vh;
    /* background-color: ${({ theme }) => theme.colors.c100}; */
    background-color: white;
`;
