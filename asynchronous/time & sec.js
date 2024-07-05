let num = 1
function start(){
    let d = new Date();
    document.getElementById("time").innerHTML= d.toLocaleTimeString();
}
setInterval(start,1000)