import { styled } from "styled-components";

export const StyledDivMain = styled.div`
    margin-top: 16px;
    padding: 0 5%;

    display: flex;
    flex-direction: column;

    gap: 16px;

    padding-bottom: 16px;

    transition: all 1s;

    position: relative;

    div {
        display: flex;
        justify-content: space-between;
        align-items: center;

        > span {
            display: flex;
            width: 100%;
            justify-content: space-between;
            align-items: center;
            max-width: 300px;

            > button {
                text-decoration: underline 2px black;
            }
        }

        @media (max-width: 1000px) {
            flex-direction: column;
            align-items: start;
            gap: 8px;
        }

        > section {
            display: flex;
            align-items: center;

            gap: 16px;

            @media (max-width: 1000px) {
                width: 100%;
            }

            > :nth-child(1) {
                background-color: #d9d9d9;
                display: flex;
                align-items: center;
                justify-content: center;

                border-radius: 8px;
                padding: 8px;
            }

            > section {
                background-color: #d9d9d9;
                display: flex;
                align-items: center;
                padding: 8px;
                gap: 4px;
                border-radius: 8px;

                @media (max-width: 1000px) {
                    width: 100%;
                }

                > input {
                    height: 100%;
                    border: none;
                    border-radius: 4px;
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }

    ul {
        display: flex;
        flex-direction: column;
        gap: 16px;

        @media (max-width: 1000px) {
            font-size: 85%;
        }

        li {
            padding: 0 16px;
            border-radius: 8px;
            width: 100%;
            height: 120px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            cursor: pointer;

            padding: 8px 5%;

            background: #d9d9d9;

            transition: all 0.5s;

            @media (max-width: 1200px) {
                overflow: auto;
            }

            @media (max-width: 1000px) {
                padding: 0;
                flex-direction: column;
                align-items: start;
                height: 30%;
                gap: 12px;
            }

            > span {
                display: flex;
                flex-direction: column;
                gap: 8px;
                align-items: center;

                @media (max-width: 1200px) {
                    min-width: 30%;
                }

                @media (max-width: 1000px) {
                    flex-direction: row;
                }
            }
        }
        li:hover {
            background: rgba(0, 0, 0, 0.15);
        }
    }
`;
