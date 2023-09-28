import styled from "styled-components";

export const StyledHeader = styled.header`
    height: 100px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
    padding: 0 5%;

    transition: all 1s;

    > img {
        height: 90px;
        border-radius: 8px;
    }

    @media (max-width: 1000px) {
        width: 100%;
        height: 80px;

        > :nth-child(1) {
            display: none;
        }
    }

    > nav {
        display: flex;
        gap: 32px;

        > :nth-child(1) {
            padding: 0 32px;
        }
        > :nth-child(2) {
            padding: 0 32px;
        }

        @media (max-width: 1000px) {
            width: 100%;
            justify-content: space-between;
        }

        button {
            padding: 12px;
            background-color: #d9d9d9;
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;

            @media (max-width: 1000px) {
                padding: 4px;
            }
        }
    }
`;
