// object de-structuring

const course = {
    courseInstructor: "kunal",
    courseName: "CSE",
    fees: 6000000,
    position: "Senior"
}

const {courseInstructor,fees} = course
console.log(courseInstructor) //we can get same obj value and we don't need to use course.courseInstructor
console.log(fees)// same as above

// if we want to give more short name then

const {courseName:CN , position:p} = course // same object key accessing by short name
console.log(CN,p)


