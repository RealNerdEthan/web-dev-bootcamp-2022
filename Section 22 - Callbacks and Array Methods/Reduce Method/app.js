//Summing an Array
[3, 5, 7, 9, 11].reduce((accumulator, currentValue) =>{
    return accumulator + currentValue;
});
//The final return value for this will be 35

//Another example-----------------------------------------------------
const prices = [9.99, 1.50, 19.99, 49.99, 30.50];

//We can get a sum with a for loop
let total = 0;
for (let price of prices){
    total += price;
}

console.log(`For Loop total: ${total}`);

//Now we'll get to the same answer but use the reduce method
const totalReduceMethod = prices.reduce((total, price) =>{
    return total + price;
});

console.log(`Reduce Method total: ${totalReduceMethod}`)

//Now lets find the minimum value in the prices array
const minPrice = prices.reduce((min, currentPrice) =>{
    if(currentPrice < min){
        return currentPrice;
    }
    return min;
});

console.log(`Minimum price: ${minPrice}`);

//And of course the maximum value in the prices array
const maxPrice = prices.reduce((max, currentPrice) =>{
    if(currentPrice > max){
        return currentPrice;
    }
    return max;
});

console.log(`Maximum price: ${maxPrice}`);

//Now we'll use reduce method with objects-------------------------
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

const bestMovie = movies.reduce((bestScore, currentMovie) => {
    if(currentMovie.score > bestScore.score){
        return currentMovie;
    }
    return bestScore;
});

console.log(`Best movie score: ${bestMovie.title} - ${bestMovie.score}`)

//One last example: You can start with an initial value for the accumulator by setting a second argumanet
//In this example we'll start at 100 and then add the evens array values, totaling in 120
const evens = [2, 4, 6, 8];

const evensSum = evens.reduce((sum, number) => {
    return sum + number;
}, 100);

console.log(`Evens total: ${evensSum}`);