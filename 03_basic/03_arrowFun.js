
const user = {
    username: "pratham",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "pratham"
//     console.log(this.username); // (this) key are not used in functions (any functions);
// }

// chai()

// const chai = function () {
//     let username = "pratham"
//     console.log(this.username);
// }

const chai =  () => {
    let username = "pratham"
    console.log(this);
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 ) //this is another way to write arrow fuction in JS (in this no need to write return keyword) 

const addTwo = (num1, num2) => ({username: "pratham"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()