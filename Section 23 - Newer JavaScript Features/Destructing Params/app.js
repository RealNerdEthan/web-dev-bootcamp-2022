const user1 = {
    email: "stacy@gmail.com",
    firstName: "Stacy",
    lastName: "LaPreaze",
    born: 1975,
    city: "Morley",
    state: "Michigan"
}

const user2 = {
    email: "george@gmail.com",
    firstName: "George",
    lastName: "Windfall",
    born: 1935,
    died: 1987,
    city: "Morley",
    state: "Michigan",
    occupation: "Systems Engineer"
}

//Destructer and only grab firstName and lastName. Also setting a default value (param) in case there's no info, but this is totally optional
function fullName({firstName = "Missing Value", lastName = "Missing Value"}){
    return `${firstName} ${lastName}`;
}

//Now lets work work with the movie array we've created
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
        title: "Sharknado",
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

//We are grabbing the movies with the best scores and destructing on the way in to simplify our code
const bestMovies = movies.filter(({score}) => score >= 90)
console.log(bestMovies);

//we can do more than just one property! We'll destruture all 3
const movieDetails = movies.map(({title, score, year}) => {
    console.log(`${title} (${year}) has a score of: ${score}`);
})