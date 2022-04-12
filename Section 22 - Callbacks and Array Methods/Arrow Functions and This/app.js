const person = {
    firstName: "Ethan",
    lastName: "Goddard",
    fullName: () => {
        console.log(this);
        return `${this.firstName} ${this.lastName}`;
    }
}

//If you call person.fullName you will get "undefinied" becuase inside the => function, "this" is refering to the window object
//You can see that "this" references the window object becuase we console.log()'ed it