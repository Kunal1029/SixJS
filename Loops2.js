//For in loop

//we can print objs by using for in loop

const obj = {
    n:"ks",
    age:10
}
for(const k in obj){
    // console.log(k) //give only keys of objts
    // console.log(obj[k]) // give only values 
    // console.log(k," : ",obj[k]) // give keys and values 
}

//we can print array by use for in loop 

const arr = ["js","ks","rs","ps"]
for (const key in arr) {
    // console.log(key) // onlly give keys or index , thats why array is object type in js because index as a key and values is elements
    // console.log(arr[key]) // now give elements
}

// can we use map  -  The for...in loop is designed to iterate over the enumerable properties of an object
 
const map = new Map()
map.set('in','india')
map.set('usa',"paris")

for (const key in map) {
    console.log(key) // nothing will print
} 

