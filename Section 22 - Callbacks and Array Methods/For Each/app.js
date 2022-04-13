const numbers = [9, 8, 7, 6, 5, 4, 3, 2, 1];

//We are passing an in-line function, though we could define a function outside of the forEach and instead plug in the function name
numbers.forEach(function(n){
    console.log(n * n)
    //Prints: 81, 64, 49, 36, 25, 16, 9, 4, 1
});

//Same here, we have passed in an in-line function
numbers.forEach(function(el){
    if (el % 2 === 0){
        console.log(el)
        //Prints: 8, 6, 4, 2
    }
});

//A newer way of doing something similar. This wasn't always around, so you might encounter forEach in older code.
for (let el of numbers){
    console.log(el);
}

//Once more example, but now using a more complex array of objects.
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

movies.forEach(function(movie){
    console.log(`${movie.title} - ${movie.score}/100`);
});