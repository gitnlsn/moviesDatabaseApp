import React, { useEffect, useState } from "react";
import { searchDetailed } from "../../api/omdbapi";
import { useQuery } from "../../hooks/UseQuery";

import { DetailedMovie } from '../../models/DetailedMovie';

import * as Styled from './styles';

type State = {
    fetchState: 'idle' | 'loading' | 'resolved' | 'rejected';
    error: string;
    movie: DetailedMovie | undefined;
}

export const DetailedMoviePage: React.FC = () => {
    const query = useQuery();
    const imdb = String(query.get('imdb'));

    const [state, setState] = useState<State>({
        fetchState: 'idle',
        movie: undefined,
        error: '',
    })

    useEffect(() => {
        if (imdb.length === 0) {
            return;
        }

        setState({
            fetchState: 'loading',
            error: '',
            movie: undefined,
        });

        searchDetailed(imdb).then(data => {
            setState({
                fetchState: 'resolved',
                error: '',
                movie: data
            });
        }).catch(error => setState({
            fetchState: 'rejected',
            error: error.message,
            movie: undefined,
        }));
    }, [imdb]);

    return (
        <Styled.Main>
            {state.movie && (
                <Styled.MovieSection>
                    <img src={state.movie.Poster} alt={state.movie.Title} />
                    <Styled.Description>
                        <p>Title: <span>{state.movie.Title}</span></p>
                        <p>Year: <span>{state.movie.Year}</span></p>
                        <p>Genre: <span>{state.movie.Genre}</span></p>
                        <p>Country: <span>{state.movie.Country}</span></p>
                        <p>Runtime: <span>{state.movie.Runtime}</span></p>
                        <p>Director: <span>{state.movie.Director}</span></p>
                        <p>Writer: <span>{state.movie.Writer}</span></p>
                        <p>Actors: <span>{state.movie.Actors}</span></p>
                        <p>Awards: <span>{state.movie.Awards}</span></p>
                        <p>Plot: <span>{state.movie.Plot}</span></p>
                        <p>Imdb Rating: <span>{state.movie.imdbRating}</span></p>
                    </Styled.Description>
                </Styled.MovieSection>
            )}
        </Styled.Main>
    );
}