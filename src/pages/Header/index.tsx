import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import { TitleSearch } from "../../components/TitleSearch";

import * as Styled from './styles';

export const Header: React.FC = () => {
    const history = useHistory();
    const location = useLocation();

    const isHomePage = location.pathname === '/';

    const handleSearchTitle = (title: string) => {
        history.push(`/search?title=${title}&page=1`);
    }
    
    return (
        <Styled.Header>
            <Styled.Link to='/'>
                <Styled.Title >Movie's Database</Styled.Title>
            </Styled.Link>
            {!isHomePage &&
                <Styled.SearchWrapper>
                    <TitleSearch onSubmit={handleSearchTitle} />
                </Styled.SearchWrapper>
            }
        </Styled.Header>
    )
}