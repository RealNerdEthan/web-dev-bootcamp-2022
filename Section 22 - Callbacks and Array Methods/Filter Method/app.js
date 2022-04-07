const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const odds = numbers.filter(n => {
    return n % 2 === 1;
    //Our callback returns true or false, if true n is added to the filtered array
})
//Will return [1, 3, 5, 7, 9]

const smallNumbers = numbers.filter(n => n < 5);
//will return [1, 2, 3, 4]


//Another example
const movies = [
    {
        title: "Toy Story",
        score: 92,
        year: 1995
    },
    {
        title: "Stand By Me",
        score: 85,
        year: 1986
    },
    {
        title: "Soul",
        score: 95,
        year: 2020
    },
    {
        title: "Avengers: End Game",
        score: 94,
        year: 2019
    },
    {
        title: "Finding Nemo",
        score: 86,
        year: 2003
    },
    {
        title: "sharknado",
        score: 35,
        year: 2013
    },
    {
        title: "13 Going On 30",
        score: 70,
        year: 2004
    },
    {
        title: "Water World",
        score: 62,
        year: 1995
    },
    {
        title: "Jingle All The Way",
        score: 71,
        year: 1996
    }
];

const goodMovies = movies.filter(movie => {
    return movie.score > 80;
});

const recentMovies =  movies.filter(movie => {
    return movie.year > 2010;
})

//We can then filter goodMovies with .map to get just the title
const goodTitles = goodMovies.map(movie => movie.title);

//Or we can even combine the two like this:
const goodMovieTitles = movies.filter(movie => movie.score > 80).map(movie => movie.title);