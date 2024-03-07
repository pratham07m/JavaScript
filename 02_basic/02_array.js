
const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros) //it use for concat a 2 array into singal array
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros] //use to spred two array and after marge into a singal array

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity) //use to flat all array into singal array
console.log(real_another_array);



console.log(Array.isArray("pratham"))
console.log(Array.from("pratham"))
console.log(Array.from({name: "pratham"})) // interesting becouse it output will be a empty array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));