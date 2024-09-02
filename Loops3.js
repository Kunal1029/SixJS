// For each loop - return nothing

const arr = ["js","ks","ls"]
arr.forEach((item,i) => { //arrow function withname, for each takes callback function with arguments which contain each value and index(optional)
    //  console.log(item,i)
});

arr.forEach(function(val){//normal function as a callback in foreach loop
    // console.log(val)
})

// Also

function printElements(item){ //normal func
    return item;
}

function printElementsWithReturn(item){ //normal func
    return item;
}

arr.forEach(printElements) //we used foreach for array and printing value by giving reference of function inside foreach
// arr.forEach(printElements()) //error - undefined is not a function
// arr.forEach(printElementsWithReturn) //error - undefined is not a function when we use return in function and give reference like this

// three arguments comes in for each loop is value , indexes and full array 

const coding = ["js","cpp","java","python","c","rust"]
coding.forEach((item,i,krr)=>{
    // console.log(item,i,krr.push(item))
    // console.log(item,i,krr)
})

// [{},{},{}] 

const obj = [
    {
        nam:"ku",
        age:10
    },
    {
        nam:"pu",
        age:20
    },
    {
        nam:"du",
        age:30
    }
]

obj.forEach((item,i)=>{
    console.log(item.nam)
    console.log(item.age)
    // console.log(item[nam]) //error
    

})

