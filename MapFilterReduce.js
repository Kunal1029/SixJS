// chaining in js

const arr = [1,2,3,4,5,6,7,8];

const val = arr
            .map((n)=> n*10)
            .map((n)=> n+1)
            .filter((n)=> n>=41)       
            
// console.log(val)

//Reduce method

// Array.reduce((accumulator, currentValue)=>{
//     return accumulator+currentValue
// },initalValue)

const sum = arr.reduce(function(accumulator,currentValue){
    return accumulator+currentValue;
},0)
// console.log(sum)

// by arrow func
const total = arr.reduce((cal,curr)=>(cal+curr),0)
console.log(total)

const total1 = arr.reduce((cal,curr)=> cal*curr ,1)
console.log(total1)

const total2 = arr.reduce((cal,curr)=> cal+curr ,2)
console.log(total2)


