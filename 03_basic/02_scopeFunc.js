
//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}
/* {
    in this brakets are call scope (it wood be a function , if else ext..)but naver be a object
    } 
*/

// one()

if (true) {
    const username = "pratham"
    if (username === "pratham") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5)) //we acn easy acces becous we write a normal function

function addone(num){ //this is a one way to declair a function
    return num + 1
}



addTwo(5) //we cannot acces becous we hold function in variabal (const);
const addTwo = function(num){ //this is another method to write function
    return num + 2
}