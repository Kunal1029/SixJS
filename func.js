// object and array print in function

//stack (primitive dataTypes) and Heap (non-primitive datatypes)

const obj = {
    user:"kunal",
    age:24,
    prr: [10,29,2]
}

function name(anyObject){
    return `Hi ${anyObject.user} , your age is ${anyObject.age} and PS age is ${anyObject.prr[1]}`
};

console.log(name(obj))

function arr(anyArray){
    return `Your age is ${anyArray[2]}`
}

const krr = [10,31,24,66]

console.log(arr(krr))
