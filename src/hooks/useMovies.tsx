import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import movieDB from '../api/MovieDB';
import { Movie, MovieDBNowPlaying } from '../interfaces/movieInterface';

export const useMovies = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [moviesNowPlaying, setMoviesNowPlaying] = useState<Movie[]>([]);

    const getMovies = async () => {
        const resp = await movieDB.get<MovieDBNowPlaying>('/now_playing');
        const movies = resp.data.results;
        setMoviesNowPlaying(movies);

        setIsLoading(false)
    }


    useEffect(() => {
        getMovies();

    }, []);


    return {
        moviesNowPlaying,
        isLoading
    }
}