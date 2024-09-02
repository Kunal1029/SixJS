// for of loop , array

const arr = [1,2,3,4,5]
// console.log(typeof arr) //objecct
for(const num of arr){
    // console.log(num)
}

const greeting = "Hellow World";
// console.log(typeof greeting)
for(const greet of greeting){
    // console.log(greet)
}

//Maps

const map = new Map()
map.set('in','india')
map.set('usa',"paris")
map.set(2,30)
map.set('in','india') //map hold only unique values and stay in same order

// console.log(typeof map)

// console.log(map)

for(const value of map){
    // console.log(value) //every element print in []
}

for(const [k] of map){
    // console.log(k) //only keys will print
}

for(const [k , v] of map){
    // console.log(k,v) //both keys and values will print
}

//can we print object with this for of loop?
const obj = {
    n:"ks",
    age:10
}
// for(const o of obj){
//     // console.log(o) //TypeError: obj is not iterable
// }


// for(const [k,v] of obj){
//     console.log(k,v) //TypeError: obj is not iterable
// }

// we can't print object by using for of loop and give obj is not iterable
