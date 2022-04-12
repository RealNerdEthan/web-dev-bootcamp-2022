const feline = {
    legs: 4,
    family: "Felidae"
}

const canine = {
    isFurry: true,
    family: "Caninae"
}

const catDog = {...feline, ...canine};
console.log(catDog);

//We have a conflict when creating catDog becuase both objects have a family value. In this case order matters and
//family: "Caninae" will be the final value becuase canine was called second and overwrote any conflicting values
//If we switched the order and called feline second, "Felidae" would be the final value instead


//A real world example, a user signs up for our website and we want to copy their input and add data of our own
const dataFromform = {
    email: "fake@gmail.com",
    username: "SirFaketon",
    password: "fakepassword123"
}

//Now lets add data to their input
const newUser = {...dataFromform, id: 12345, isAdmin: false}