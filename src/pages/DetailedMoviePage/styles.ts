import styled from "styled-components";

export const Main = styled.main`
    padding: 24px 64px;

    background-color: bisque;

    min-height: 100vh;
`;

export const MovieSection = styled.section`
    display: flex;
    flex-direction: row;

    img {
        height: 540px;
    }
`;

export const Description = styled.section`
    padding: 8px 64px;
    
    p {
        margin-top: 16px;
    }
    span {
        font-weight: bold;
    }
`;
