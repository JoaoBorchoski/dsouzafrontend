import styled from "styled-components";

export const StyledModalOrder = styled.div`
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

        > section {
            display: flex;
            justify-content: space-between;

            button {
            }

            > :nth-last-child(1) {
                width: 48%;
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

            > :nth-last-child(2) {
                width: 48%;
                border-radius: 8px;
                padding: 12px;
                font-size: 16px;
                background: white;
                color: black;

                display: flex;
                justify-content: center;
                align-items: center;

                @media (max-width: 1000px) {
                    height: 45px;
                }
            }
        }
    }
`;
