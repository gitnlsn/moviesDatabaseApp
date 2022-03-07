import { Link as RouterLink } from "react-router-dom";
import styled from "styled-components";

export const Main = styled.main`
    padding: 24px 64px;

    background-color: bisque;

    min-height: 100vh;
`;

export const InfoRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const TotalResults = styled.p``;

export const Link = styled(RouterLink)`
`;

export const Paginator = styled.div`
    margin-left: auto;

    display: flex;
    flex-direction: row;

    align-items: center;
    
    img {
        display: inline-block;

        cursor: pointer;
    }

    p {
        font-size: 20px;
    }
`;

export const ListWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;

    margin-top: 16px;
`;

export const CardWrapper = styled.div`
    margin: 8px;
`;
