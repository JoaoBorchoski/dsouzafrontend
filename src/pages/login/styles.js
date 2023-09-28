import styled from "styled-components";

export const StyledContainerLogin = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    height: 100vh;
    width: 100%;

    > form {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 24px;

        background: #d9d9d9;

        border-radius: 8px;
        padding: 32px;
        width: 30%;

        @media (max-width: 1000px) {
            width: 90%;
            padding: 36px 12px;
        }

        > section {
            width: 100%;
            position: relative;

            > span {
                font-size: 12px;
                position: absolute;
                bottom: -15px;
            }
        }

        > button {
            width: 100%;
            border-radius: 8px;
            padding: 12px;
            font-size: 16px;
            background: white;
            color: black;
            margin-top: 24px;
        }
    }
`;
