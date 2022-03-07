import React from "react";
import { MovieCard as MovieCardType } from "../../models/MovieCard";

import * as Styled from './styles';

interface MovieCardProps {
    movie: MovieCardType;
}

export const MovieCard: React.FC<MovieCardProps> = ({
    movie
}) => {
    return (
        <Styled.Container>
            <img src={movie.Poster} alt={movie.Title} />
            <Styled.Details>
                <span className="movie-title">{movie.Title}</span>
                {` - `}
                <span className="movie-year">{movie.Year}</span>
                {` - `}
                <span className="movie-type">{movie.Type}</span>
            </Styled.Details>
        </Styled.Container>
    );
};
