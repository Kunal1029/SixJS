const promi = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve()
        console.log("promi 1")
    },1000)
})
.then(()=>{
    console.log("Promise Consumed")
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Task 2")
        resolve()
    },1000)
})
.then(function(){
    console.log("Resolved 2 promise")
})

const promi3 = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Resolve 3")
        resolve({user:"Kunal",age:10})
    },1000)
})
promi3.then(function(usering){
    console.log(usering.user)
    console.log(usering.age)
})

const promi4 = new Promise(function(resolve,reject){
  setTimeout(function(){
    let error = true;
    if(!error){
        resolve({username:"RaviKant",age:23})
    }else{
        reject("Error : Something went wrong")
    }
    // console.log("4th Promise")
  },1000)  
})

promi4.then(function(user){
    console.log(user)
    return user.username
}).then(function(username){
    console.log(username)
})
.catch(function(error){
    console.log(error);
})

const promFive = new Promise(function(resolve,reject){
    setTimeout(()=>{
        let k = false;
        if(!k){
            resolve({username:"RK",pass:123})
        }else{
            reject("E: ERoRR from Fivee")
        }
    },1000)
});

async function promFiveAsync() {
    try {
        const res = await promFive //know why did'nt call function but give function reference
        console.log(res)
    } catch (error) {
        console.log(error)
    }
}
promFiveAsync()

//fetch

const apiF = async () =>{
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log("krr ",error)
    }
}
// apiF();

fetch('https://jsonplaceholder.typicode.com/users')
.then(function(res){
    return res.json()
})
.then(function(data){
    console.log(data)
})
.catch((err)=>{
    console.log(err)
})