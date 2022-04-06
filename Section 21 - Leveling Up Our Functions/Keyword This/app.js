//Example using "this"
const person = {
    first: "Ethan",
    last: "Goddard",
    fullName(){
        return `${this.first} ${this.last}`
    }
}

//Then you could run person.fullname()