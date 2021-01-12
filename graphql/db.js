export const people = [
  {
    id: 0,
    name: "Nicolas",
    age: 18,
    gender: "female"
  },
  {
    id: 1,
    name: "Jisu",
    age: 18,
    gender: "female"
  },
  {
    id: 2,
    name: "Japan Guy",
    age: 18,
    gender: "male"
  },
  {
    id: 3,
    name: "Daal",
    age: 18,
    gender: "male"
  },
  {
    id: 4,
    name: "JD",
    age: 18,
    gender: "male"
  },
  {
    id: 5,
    name: "moondaddi",
    age: 18,
    gender: "male"
  },
  {
    id: 6,
    name: "flynn",
    age: 18,
    gender: "male"
  }
];

export let movies = [
  {
    id: 0,
    name: "Star Wars - The new one",
    score: 1
  },
  {
    id: 1,
    name: "Avengers - The new one",
    score: 8
  },
  {
    id: 2,
    name: "The Godfather I",
    score: 99
  },
  {
    id: 3,
    name: "Logan",
    score: 2
  }
];

export const getById = id => {
    const filteredPeople = people.filter(person => person.id === id);
    return filteredPeople[0]; //선별된 people안에 배열 0번째 값을 가져오기(id)
};

export const getByGender = gender => {
    const filteredPeople = people.filter(person => person.gender === gender);
    return filteredPeople; //선별된 person을 배열이 아닌 object로 보내주기(id로는 한명이 뽑힐 거니까)
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
