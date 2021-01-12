import { people, getById, getByGender, movies, getMovieById, addMovie, deleteMovie } from "./db";

const resolvers = {
    Query: {
        people: () => people,
        person: (_, { id }) => getById(id),
        man: (_, { gender }) => getByGender(gender),
        movies: () => movies,
        movie: (_, { id }) => getMovieById(id)
    },

    Mutation: {
        addMovie: (_, { name, score }) => addMovie(name, score),
        deleteMovie: (_, { id }) => deleteMovie(id)
    }
};

export default resolvers;