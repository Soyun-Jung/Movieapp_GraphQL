//import { people, getById, getByGender, movies, getMovieById, addMovie, deleteMovie, getMovies } from "./db";
import { getMovies } from "./db";

const resolvers = {
    Query: {
        movies: (_, { rating, limit }) => getMovies(limit, rating)
    }
    // },

    // Mutation: {
    //     addMovie: (_, { name, score }) => addMovie(name, score),
    //     deleteMovie: (_, { id }) =>  deleteMovie(id)
    // }
};

export default resolvers;