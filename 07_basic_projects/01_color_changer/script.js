let button = document.querySelectorAll('.btn');
// console.log(button);
let body = document.querySelector('body');

button.forEach(function(bnt){
    console.log(bnt);
 bnt.addEventListener('click' , function(a){
     console.log(a);
     console.log(a.target);
     if(a.target.id === 'grey'){
        body.style.backgroundColor=a.target.id;
     }
     if(a.target.id === 'white'){
        body.style.backgroundColor=a.target.id;
     }
     if(a.target.id === 'blue'){
        body.style.backgroundColor=a.target.id;
     }
     if(a.target.id === 'red'){
        body.style.backgroundColor=a.target.id;
     }
 } )

})