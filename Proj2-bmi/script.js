// const inp1 = document.getElementById('weight')
// const inp2 = document.getElementById('height')
// const h2 = document.createElement('h2')
// const div = document.querySelector('div')

// const btn = document.querySelector('button')
// btn.addEventListener('click',function(e){
//     e.preventDefault();
//     const result = (inp1.value/inp2.value)*10000;
//     h2.innerText = result;
//     div.appendChild(h2)
// })

const form = document.querySelector('form')
form.addEventListener('submit',function(e){
    e.preventDefault();
    const inp1 = parseInt(document.querySelector('#weight').value)
    const inp2 = parseInt(document.querySelector('#height').value)
    // console.log(inp1,inp2)
    const result = document.querySelector('#result')

    if(inp1 === '' || inp1 <= 0 || isNaN(inp1)){
        result.innerHTML = "Correct weight pls"
    }else if(inp2 === '' || inp2 <= 0 || isNaN(inp2)){
        result.innerHTML = "Correct height pls"
    } else{
        const bmi = (inp1 /(inp1*inp2/10000)).toFixed(2)
        result.innerHTML = bmi
    }

    
})