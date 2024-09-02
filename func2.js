
one(4) // will work fine for function 

function one(num){
    console.log(num+1)
}

// one(4)


// two(7) //ERROR - not work with variable even that variable assign as a function
const two = function(num){ // two is a function expression
    console.log(num+2)
}

// two(6)