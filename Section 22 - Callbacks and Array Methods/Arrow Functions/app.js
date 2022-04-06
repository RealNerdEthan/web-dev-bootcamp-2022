//Example 1
const square = (x) => {
    return x * x;
}

//Example 2
const sum = (x, y) => {
    return x + y;
}

//Example 3 showing you have to have empty () even if there are no arguments/parameters you want to declare
const rollDie = () => {
    return Math.floor(Math.random() * 6) + 1;
}

//Example 4 showing an implicent return (removes the "return" word and replaces {} with ())
const rollDie2 = () => (
    Math.floor(Math.random() * 6) + 1
)

//Example 5 showing an even slimmer version of implicent return
const add = (x, y) => x + y

//Example 6: Shortening up an old example
const movies = [
    {
        title: "Toy Story",
        score: 92
    },
    {
        title: "Stand By Me",
        score: 85
    },
    {
        title: "Soul",
        score: 95
    },
    {
        title: "Avengers: End Game",
        score: 94
    },
    {
        title: "Finding Nemo",
        score: 86
    },
];

//Typical function expression
const movieScores = movies.map(function(movie){
    return `${movie.title} - ${movie.score / 10}`;
})

//Now written as an arrow function
const movieScores = movies.map(movie => {
    return `${movie.title} - ${movie.score / 10}`;
})

//Now implicent return
const movieScores = movies.map(movie => (
    `${movie.title} - ${movie.score / 10}`
))

//Now implicent return on one line
const movieScores = movies.map(movie => `${movie.title} - ${movie.score / 10}`)