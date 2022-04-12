const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

//To use Math.max we need to "spread" the array of numbers into individual values so the function can find the maximum value
//We use ... before calling the nums array to "spread" the values inside the nums array
//Spread creates the seperate arguments (1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15) from the nums array and then 
//executes the .max() function with those arguments
console.log(`The maximum number is: ${Math.max(...nums)}`);