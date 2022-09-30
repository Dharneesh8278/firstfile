function trafficsignal(){
var green=document.getElementById("green");
var red=document.getElementById("red");
var yellow=document.getElementById("yellow");

red.style.opacity=1;

setTimeout(function(){
    red.style.opacity=0;
    yellow.style.opacity=0;
    green.style.opacity=1;

},8000)


setTimeout(function(){
    red.style.opacity=0;
    yellow.style.opacity=1;
    green.style.opacity=0;

},7000)


setTimeout(function(){
    red.style.opacity=1;
    yellow.style.opacity=0;
    green.style.opacity=0;

},10000)
}


var timer=setInterval(function(){
    trafficsignal();

},7000)
trafficsignal();