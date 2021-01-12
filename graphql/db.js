import fetch from "node-fetch";
const API_URL = "https://yts.am/api/v2/list_movies.json?"

export const getMovies = (limit, rating) => {
    let REQUEST_URL = API_URL;
    if (limit > 0) {
        REQUEST_URL += `limit=${limit}`;
    }
    if (rating > 0) {
        REQUEST_URL += `&minimum_rating==${rating}`;
    }

    return fetch(REQUEST_URL)
    .then(res => res.json())
    .then(json => json.data.movies);
};

export const getMovieById = id => {
    const filteredMovie = movies.filter(movie => movie.id === id);
    return filteredMovie[0]; //선별된 people안에 배열 0번째 값을 가져오기(id)
};

export const addMovie = (name, score) => {
    const newMovie = {
        id: movies.length,
        name: name,
        score:score
    }

    movies.push(newMovie);
    return newMovie;
}

export const deleteMovie = id => {
    const cleanedMovies = movies.filter(movie => movie.id !== id);
    if (cleanedMovies.length < movies.length) {
        movies = cleanedMovies;   
        // return true;
    } 
    return cleanedMovies;
}
