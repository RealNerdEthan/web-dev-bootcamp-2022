const numbers = [20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

//Prints an array that doubles the value of each item plugged in from the numbers array
numbers.map(function(number){
    console.log(number * 2);
});

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

//Creates a new array called "titles" pulling from the movies array
const titles = movies.map(function(movie){
    return movie.title;
})