const div = document.querySelector('div')



setInterval(function(){
    const time = new Date()
    div.innerHTML = `<b>${time.toLocaleTimeString()}</b>`
    div.style.padding = "20px"
},1000)

