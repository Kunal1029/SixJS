//Arrow funct and this keyword

const k = {
    uname: "LL",
    age:10,

    welcome:function(){
        console.log(`${this.uname} , Welcome`)
        console.log(this) //parent is object k , so "this" give full parent details
        // console.log(this.welcome()) //StackOverflowError
    }
}

// k.welcome()
// k.uname = "Kunal"
// k.welcome()

console.log(this) //{}  - empty curly braces in node envirnoment but IN BROSWSER gives Window object callrd global object

// but
const uname = 90
function chai(){
    let uname = 80;
    console.log(this) //inside simple function and in node envroment it gives global object
    console.log(this.uname) //undefined
}

const llo = function(){
    console.log(this) //inside function and in node envroment it gives global object
} 
// llo()
// chai()

// Arrow function - () =>{}

const mychai = () =>{
    console.log(this.uname) //undefined
    console.log(this) //{} -- in arrow func "this" gives empty object like when we print "this" without function in node envirnoment
}

// mychai()

const arrow1 = (n1,n2)=>{
    return n1+n2;
}
// console.log(arrow1(2,3))

//Implicit return arrow funct
const arrow2 = (n1,n2) => n1+n2; // don't need to give {} and can implicit return
// console.log(arrow2(4,7 ))

const arrow3 = (k1,k2) => console.log(k1+k2);
// arrow3(20,10)

const arrow4 = (n1,n2) => (n1+n2); // if we use {} then we need to return , and for () we don't need return
// console.log(arrow4(26,9))

const arrow5 = (n1,n2) => {username:"Kunal"};// can't give objet like this 
// console.log(arrow5(1,2)) //undefined

const arrow6 = (n1,n2) => ( {username:"Kunal"} ); //can use object in arrow function like this by use ()
console.log(arrow6(1,2))//implicit return things in () , like object print in this case

const arr = [2,5,3,7,8];
arr.forEach(element => {});

arr.forEach(() => {}); //arrow function in loop
arr.forEach(function(){}); //simple function in loop