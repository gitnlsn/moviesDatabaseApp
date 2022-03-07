import { Link as RouterLink } from "react-router-dom";
import styled from "styled-components";

export const Header = styled.header`
    display: flex;
    flex-direction: row;

    background-color: darkslategrey;

    padding: 16px;
`;

export const Title = styled.p``;

export const SearchWrapper = styled.div`
    margin-left: auto;
`;

export const Link = styled(RouterLink)`
    display: block;


    :focus {
        font-weight: bold;
    }

    :hover {
        font-weight: bold;
    }
`;