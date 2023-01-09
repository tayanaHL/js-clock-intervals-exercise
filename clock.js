

const seconds = document.getElementById("second")
const minutes = document.getElementById("minute")
const hours = document.getElementById("hour")

function setDate(){
const now = new Date();
const second = now.getSeconds();
const minute = now.getMinutes();
const hour = now.getHours() ;
const timeInterval = 6

console.log(now)
console.log(second * timeInterval)
console.log(minute * timeInterval + second / 10)
console.log(hour *  30 + minute / 2)


console.log(seconds)
seconds.style.transform = 'rotate(' + (second * timeInterval) + 'deg'
minutes.style.transform = 'rotate(' + (minute * timeInterval + second / 10) + 'deg'
hours.style.transform = 'rotate(' + (hour *  30 + minute / 2) + 'deg'

}

setInterval(setDate, 1000);
setDate();

/*


const secondDegrees = ((second / 60) * 360) + 90;
const minuteDegrees = ((minute / 60) * 360) +((second/60)* 6) + 90;
const hourDegrees = ((hour / 12) * 360) + ((minute/60)* 30) + 90;


seconds.style.transform = `rotate(${secondDegrees}deg)`;
minutes.style.transform = `rotate(${minuteDegrees}deg)`;
hours.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000);

setDate();
*/ 
