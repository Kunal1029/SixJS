// singleton object

const a = new Object();
a.kunal ="name";

// console.log(a)

const user = {}
user.lala = "kunal"
// console.log(user)

//nested objects
const o1={
    age:10,
    fullname:{
        userFullName:{
            first: "YO YO",
            last: "Sing"
        }
    }
}
// console.log(o1["fullname"]["userFullName"]["first"])
// console.log(o1.fullname.userFullName.last)

//combine or merge two+ object

const ob1 = {a:1,b:2}
const ob2 = {c:3,d:4}
const ob22 = {e:5,f:6}

const ob3 ={ob1,ob2} //this not combine but make a obj which contain 2 objects as a key
// console.log(ob3)

//So we'll use Object.assign for combinig
const obj4 = Object.assign(ob1,ob2)
// console.log(obj4)
// console.log(ob1)
// console.log(ob1 === obj4)//give true caz obj1 becomes combination obj1 and obj2

const obj5 = Object.assign({},ob1,ob22)
// console.log(obj5) //now this becoms a seperate obj which contain both objects key
// console.log(ob1 === obj5) //false , caz both object add in {} empty object which is in assign syntax

//or we can do this by using spread operator

const obj6 = {...ob1,...ob2}
// console.log(obj6)


//accessing multiple objects keys values, Object.keys(objName)-- give all keys of object, Object.values(objName) -- give all values of objects

console.log(Object.keys(obj6)) //this give us all keys of obj6
console.log(Object.values(obj6)) //this give us all values of obj6
console.log(Object.entries(obj6)) //this give us array pair of key value

//checking if any property is present in object - ObjectName.hasOwnProperty('keyName')
console.log(obj6.hasOwnProperty('c')) //true
console.log(obj6.hasOwnProperty('f')) //true

