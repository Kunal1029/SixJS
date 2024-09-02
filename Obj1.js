//singleton

//object.create - can create object like this
//object literals

//symbol dataType

const mySym =  Symbol()
const mySym2 =  Symbol()

const jsUser = {
    name:"ks",
    age:10,
    mySym:"hello",
    [mySym] : "Key1", // symbol dt can only give in squre brackets as a key in object, otherwise takes as string
    mySym2:"Key2",
    "sur name":"shivhare"
}

console.log(jsUser)
console.log(jsUser.mySym) // also can't access like this, we need [] , undefined
console.log(jsUser[mySym]) //symbol value print
// console.log(jsUser."sur name") // can't use like thay
console.log(typeof jsUser.mySym2)

// another way of accesing key of objects
console.log(jsUser["name"])
console.log(jsUser["sur name"]) // can use like this

//Can freez object which prevent to updation in object
// object.freeze(objName)

jsUser.age = 24;
console.log(jsUser.age)
Object.freeze(jsUser)
jsUser.age = 54;// not give error but not change in object
console.log(jsUser.age)

const jsUser2 = {
    name:"ks",
    age:10,
}

jsUser2.greeting = function(){
    console.log("Hi kunal")
}
console.log(jsUser2)
console.log(jsUser2.greeting()) //give output and undefined
console.log(jsUser2.greeting)  // function definition or a reference to the function in the console. It does not execute the function; it just shows what the function is

jsUser2.greeting2 = function() {
    const age = 40;
    console.log(`Hi kunal ${age}`);     // Logs the local variable 'age'
    console.log(`Hi kunal ${this.age}`); // Attempts to log the 'age' property of the object
}

console.log(jsUser2)
console.log(jsUser2.greeting2()) 
//console.log(Hi kunal ${this.age});:
// this refers to the object on which the function was called (jsUser2 in this case). So, this.age attempts to access the age property of the jsUser2 object.
// If the jsUser2 object does not have a property named age, this will log undefined.

