//  ************    Datatypes   ******************
// Two types 
//     1. primitive      2. Non-primitive
    

//     1. pimitive => 
//         7 types :  String,Number ,boolean , null , undefined ,symbol , BigInt

   const isLoggedIn = false // type is boolean
   const outsideTemp = null // type is object 
   let userEmail;  // type is undefined

   const id = Symbol('123')  // type is symbol
   const anotherId = Symbol('123') // type is symbol
   console.log(id === anotherId);  //both ids are different not same

   const bigNumber = 26586236341652366364786 // bigInt


//     2. Non-primitive / Reference type =>
//         types of it : 
//                   Array , Objects, functions
        
    
const heros = ["itachi" , "sasuke" , "shishui"];  // arry and type is object
let myObj = {
    name: "Anuj",
    age: 19,
}   // object example and typeof is also object


const myFunction = function(){
    console.log("hello world");

}   // function and the typeof it is also function
console.log(typeof myFunction);
    
    
    
    
    
    