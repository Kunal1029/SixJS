const randomColor = ()=>{
    const length = "0123456789ABCDEF";
    let color = "#"
    for(let i = 0;i<6;i++){
        const randomIndex = Math.floor(Math.random()*16);
        color = color + `${length[randomIndex]}`
    }
    return color
}

function bodyColor(e){
    document.querySelector('body').style.backgroundColor = randomColor()
}

const start = document.querySelector("#start")
const stop = document.querySelector("#stop")
let colorInterval;  
const changeColorInterval = (what) => {
    if (what === "yes") {
      if (!colorInterval) {  // Check if an interval is not already running
        colorInterval = setInterval(bodyColor, 1000);  // Start the interval and store the ID
      }
    } else {
      clearInterval(colorInterval);  // Stop the interval using the stored ID
      colorInterval = null;  // Reset the interval ID
    }
  };
  
start.addEventListener('click',()=>{
    changeColorInterval("yes")
})
stop.addEventListener('click',()=>changeColorInterval("No"))

