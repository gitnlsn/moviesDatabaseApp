import React, { useEffect, useState } from "react";
import { searchByTitle } from "../../api/omdbapi";
import { MovieCard } from "../../components/MovieCard";
import { MovieCard as MovieCardType } from "../../models/MovieCard";

import ChevronLeft from '../../images/chevron-left.png';
import ChevronRight from '../../images/chevron-right.png';

import * as Styled from './styles';
import { useQuery } from "../../hooks/UseQuery";
import { Link } from "react-router-dom";
import styled from "styled-components";

type State = {
    fetchState: 'idle' | 'loading' | 'resolved' | 'rejected';
    error: string;
    totalResults: number;
    movies: MovieCardType[];
}

const StyledLink = styled(Link)`
    :focus {
        box-shadow: 0px 0px 1px 1px;
        border: 1px solid red;
    }

    :hover {
        box-shadow: 0px 0px 1px 3px;
        border: 1px solid;
    }

    display: block;
`;

export const SearchPage: React.FC = () => {
    const query = useQuery();

    const title = String(query.get('title'));
    const page = Number(query.get('page'));

    const [state, setState] = useState<State>({
        fetchState: 'idle',
        error: '',
        totalResults: 0,
        movies: [],
    });

    const totalPages = Number(state.totalResults) / 10;
    const displayIncreaseButton = page < totalPages;
    const displayDecreaseBUtton = page !== 1;

    useEffect(() => {
        if (title.length === 0 || page === 0) {
            return;
        }

        setState({
            fetchState: "loading",
            error: "",
            totalResults: 0,
            movies: [],
        });

        searchByTitle(title, page).then(data => {
            const totalResults = data.totalResults || 0;
            const movies = data.Search || [];

            setState({
                fetchState: 'resolved',
                error: '',
                totalResults: Number(totalResults),
                movies: movies,
            });
        }).catch(error => setState({
            error: error.message,
            fetchState: 'rejected',
            totalResults: 0,
            movies: [],
        }));
    }, [title, page]);

    return (
        <>
            <Styled.Main>
                <Styled.InfoRow>
                    <Styled.TotalResults>
                        <span>{'Total results: '}</span>
                        <span>{state.totalResults}</span>
                    </Styled.TotalResults>

                    <Styled.Paginator>
                        {displayDecreaseBUtton &&
                            <Styled.Link to={`/search?title=${title}&page=${page - 1}`}>
                                <img
                                    src={ChevronLeft}
                                    alt="chevron-left"
                                />
                            </Styled.Link>
                        }
                        <p>{page}</p>

                        {displayIncreaseButton &&
                            <Styled.Link to={`/search?title=${title}&page=${page + 1}`}>
                                <img
                                    src={ChevronRight}
                                    alt="chevron-right"
                                />
                            </Styled.Link>
                        }
                    </Styled.Paginator>
                </Styled.InfoRow>

                <Styled.ListWrapper>
                    {state.movies.map((movie, index) => (
                        <Styled.CardWrapper key={index}>
                            <StyledLink to={`/details?imdb=${movie.imdbID}`} >
                                <MovieCard movie={movie} />
                            </StyledLink>
                        </Styled.CardWrapper>
                    ))}
                </Styled.ListWrapper>
            </Styled.Main>
        </>
    );
}
