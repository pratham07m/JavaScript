
const name = "pratham"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // this is a new way to write and add a string 

const gameName = new String('pratham-hc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   pratham    "
console.log(newStringOne);
console.log(newStringOne.trim()); //remove unnececory spaces

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-')); //use for url replace

console.log(url.includes('ironman')); //cheke valu in url

console.log(gameName.split('-')); //convert string to array (behalf of "-" in this exampale);