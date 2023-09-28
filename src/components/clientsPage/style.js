import styled from "styled-components";

export const StyledModal = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;

    > div {
        display: flex;
        justify-content: space-between;
    }

    > form {
        display: flex;
        flex-direction: column;
        gap: 16px;

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
            border: 2px solid #d9d9d9;
            border-radius: 8px;
            padding: 12px;
            font-size: 16px;
            background: white;
            color: black;
            margin-top: 12px;
        }
    }
`;

export const StyledModalClient = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;

    > section {
        display: flex;
        justify-content: space-between;
    }

    > div {
        display: flex;
        flex-direction: column;
        gap: 32px;
        width: 100%;

        > :nth-last-child(2) {
            display: flex;
            gap: 4px;
        }

        > :nth-last-child(1) {
            width: 100%;
            border-radius: 8px;
            padding: 12px;
            font-size: 16px;
            background: rgba(255, 0, 0, 0.9);
            color: black;

            display: flex;
            justify-content: center;
            align-items: center;

            @media (max-width: 1000px) {
                height: 45px;
            }
        }
    }
`;
