const btn = document.querySelectorAll('.btn')
console.log(btn)
const body = document.querySelector("body")

btn.forEach((btns)=> {
    btns.addEventListener('click',function(e){
        // console.log(e)
        // console.log(e.target)
        // console.log(e.target.id)
        if(e.target.id === 'black'){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id === 'orange'){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id === 'white'){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id === 'pink'){
            body.style.backgroundColor = e.target.id
        }
    })
})