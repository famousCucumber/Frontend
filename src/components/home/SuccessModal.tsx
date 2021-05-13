import { CSSTransition } from "react-transition-group";

import styled from "styled-components";

interface SuccessModalProps {
    isOpenModal: boolean;
    setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}
const SuccessModal = ({ isOpenModal, setIsOpenModal }: SuccessModalProps) => {
    const onClick = () => {
        setIsOpenModal(false);
    };

    return (
        <CSSTransition
            in={isOpenModal}
            timeout={500}
            classNames="modal"
            unmountOnExit
        >
            <ModalDiv onClick={onClick}>
                <ModalH1>구독 성공하였습니다 :D</ModalH1>
                <ModalP>더욱 자세히 알고 싶다면? 여길로 와보세용</ModalP>
            </ModalDiv>
        </CSSTransition>
    );
};

export default SuccessModal;

const ModalDiv = styled.div`
    position: absolute;
    z-index: 99;
    width: 500px;
    height: 440px;
    background-color: ${({ theme }) => theme.colors.c500};
    border: ${({ theme }) => theme.borderSetting};

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    /* transform: translate(-50%, -50%); */
    clip-path: polygon(75% 0%, 93% 50%, 75% 100%, 0% 100%, 13% 50%, 0% 0%);

    cursor: pointer;
    transition: all 0.5s;

    &.modal-enter {
        opacity: 0;
        left: 0;
    }

    &.modal-enter-active {
        opacity: 1;
        left: 50%;
    }

    &.modal-exit {
        opacity: 1;
        left: 50%;
    }

    &.modal-exit-active {
        opacity: 0;
        left: 100%;
    }
`;

const ModalH1 = styled.h1`
    color: white;
`;

const ModalP = styled.p``;
