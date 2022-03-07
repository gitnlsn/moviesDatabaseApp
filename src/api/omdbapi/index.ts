import axios from 'axios';

import { MovieCard } from '../../models/MovieCard';

export type SearchData = {
    totalResults: string;
    Search: MovieCard[];
}

export const searchByTitle = (title: string, page: number) => {
    return axios.get('https://www.omdbapi.com/', {
        params: {
            apikey: 'cdab964a',
            s: title,
            page: page
        }
    }).then(response => response.data);
}

export const searchDetailed = (imdb: string) => {
    return axios.get('https://www.omdbapi.com/', {
        params: {
            apikey: 'cdab964a',
            i: imdb,
        }
    }).then(response => response.data);
}
