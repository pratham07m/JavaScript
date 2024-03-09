    // Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})(); // ";" compulsory to write next function becous this function can naver be ended;

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('pratham')
