import axios from 'axios';

const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: 'b920f4e26a4c420e3847262bfc83c22a',
        language: 'en-US'
    }
});

export default movieDB;