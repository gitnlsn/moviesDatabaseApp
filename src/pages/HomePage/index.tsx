import React from "react";
import { useHistory } from "react-router-dom";
import { BigTitleSearch } from "../../components/BigTitleSearch";

import * as Styled from './styles';

export const HomePage: React.FC = () => {
    const history = useHistory();

    const handleNewTitle = (title: string) => {
        history.push(`/search?title=${title}&page=1`);
    };

    return (
        <Styled.Main>
            <Styled.InputWrapper>
                <BigTitleSearch onSubmit={handleNewTitle} />
            </Styled.InputWrapper>
        </Styled.Main>
    );
};
