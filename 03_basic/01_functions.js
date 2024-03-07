

function sayMyName(){
    console.log("p");
    console.log("r");
    console.log("a");
    console.log("t");
    console.log("h");
    console.log("a");
    console.log("m");
}

// sayMyName()

// function addTwoNumbers(number1, number2){ //here (number1 , number2) is call as a paramiters

//     console.log(number1 + number2); 
// }
//   addTwoNumbers(3 , 4) //here (3 , 4) are call as a arguments

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2 //return use wane valu can store another variabal (EX - result)
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("hitesh"))


function calculateCartPrice(...num1){ //...num1 (...)is call rest operator same as spred operator
    return num1
}

 console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "pratham",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));