/* 
  2 type to declere a object
 
 (1) object literals
 (2) object constructur (singleton)
 */

    //object literals

const mysym = Symbol("key1"); //how to declere symbol in object

    const user = {
        name : "pratham",
        age : 20,
        location : "Gujarat",

        email : "pratham@google.com",
        "email Id":"pratham12@google.com",
        "emailId":"pratham21@google.com",

        isLoggedIn : false,

        [mysym] :"mykey1" //declere a symbol in object use [] (if we not use[] then our symbole is conver into a string type);
      }

     console.log(user.email);// use when key are in singal word (not declare a space)(EX - "email");
    
     console.log(user["email Id"]);//use when key are declere space(EX - "email Id");

     console.log(user.emailId); //this two are also currect method for declere (without space key)(EX - emailId)
     console.log(user["emailId"]);        //(EX - "emailId")

     console.log(user[mysym]);
     console.log(user.mysym); // answer is undifind

     user.email = "pratham@meta.com"
     console.log(user.email);

    //  Object.freeze(user); //use for no one can change object value; 
     user.email = "pratham@microsoft.com"
     console.log(user.email); //no change in email becous we can freez a object (means after object.freez we cannot change valu);

     //add function in object
     user.hello = function(){
        console.log("hello JS user");
    }
    console.log(user.hello());//when print function allways use () (EX - (user.hello()););

     user.hello2 = function(){
        console.log(`hello js user , ${this.name}`);// "this" is a referance vareabal for object we accec key using this 
     }
     console.log(user.hello2());




     
