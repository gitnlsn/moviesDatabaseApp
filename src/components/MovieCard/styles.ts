import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 200px;

    background-color: chocolate;

    img {
        width: 200px;
    }
`;

export const Details = styled.p`
    padding: 8px;

    .movie-title {
        font-weight: bold;
    }

    .movie-type {
        font-style: italic;
    }
`
