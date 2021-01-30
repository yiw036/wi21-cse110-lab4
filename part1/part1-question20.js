funtion printSec(){
let d = new Date();
let time = d.toLocaleTimeString();
console.log(time);
}
setInterval(printSec, 1000);
