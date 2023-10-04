import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import movieDB from '../api/MovieDB';
import { Movie, MovieDBMoviesResponse } from '../interfaces/movieInterface';

//for preventing using 4 different states
interface MoviesState {
    nowPlaying: Movie[];
    popular: Movie[];
    topRated: Movie[];
    upcoming: Movie[];
}

export const useMovies = () => {

    const [isLoading, setIsLoading] = useState(true);
    //const [moviesNowPlaying, setMoviesNowPlaying] = useState<Movie[]>([]); 
    //const [moviesPopular, setMoviesPopular] = useState<Movie[]>([]);
    //for preventing using 4 diferent states
    const [moviesState, setMoviesState] = useState<MoviesState>({
        nowPlaying: [],
        popular: [],
        topRated: [],
        upcoming: []
    });

    const getMovies = async () => {
        //const respNowPlaying = await movieDB.get<MovieDBMoviesResponse>('/now_playing');
        //const respPopularMovies = await movieDB.get<MovieDBMoviesResponse>('/popular');
        //const respNowPlaying = await movieDB.get<MovieDBMoviesResponse>('/now_playing');
        //const respPopularMovies = await movieDB.get<MovieDBMoviesResponse>('/popular');

        const nowPlayingPromise = await movieDB.get<MovieDBMoviesResponse>('/now_playing');
        const popularPromise = await movieDB.get<MovieDBMoviesResponse>('/popular');
        const topRatedPromise = await movieDB.get<MovieDBMoviesResponse>('/top_rated');
        const upcomingPromise = await movieDB.get<MovieDBMoviesResponse>('/upcoming');

        const response = await Promise.all([
            nowPlayingPromise,
            popularPromise,
            topRatedPromise,
            upcomingPromise
        ]);

        setMoviesState({
            nowPlaying: response[0].data.results,
            popular: response[1].data.results,
            topRated: response[2].data.results,
            upcoming: response[3].data.results
        });

        setIsLoading(false)
    }


    useEffect(() => {
        getMovies();

    }, []);


    return {
        ...moviesState,
        isLoading
    }
}