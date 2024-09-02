// Immediatelu Invoked function expression (IIFE)

//Means we want function execute immediately like we use for db

//For preventing from pollution of Gloabal scope. 
//variable of gloable scope and declaration these variable gives pollution so we use IIFE for prevent these pollution

// Global Scope Pollution: In JavaScript, any variable or function declared in the global scope is accessible from anywhere in the code, which can lead to name conflicts and unintentional overwriting. This is known as global scope pollution.
// IIFE (Immediately Invoked Function Expression): An IIFE is a function that is defined and executed immediately after its creation. It creates a new local scope, preventing variables and functions defined within it from being accessible in the global scope.

(function chai(){
    console.log("Db connected")
})(); //if we don't use ; in this then give error when another IIFE is being called



(()=>{
    console.log("db connected two")
})(); //if there will no another IIFE func after this then we can remove ;

((name)=>{
    console.log(`Hi ${name}`)
})('kunal')
