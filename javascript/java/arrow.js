// arr=()=>
// {
// alert("welcome to java script");

// }


// multiplication=(a,b)=>
// {
// let c=a*b;
// let d= document.getElementById("mull").innerHTML=c;
// console.log(d);
// }


// function fade()
// {
//     var a=document.getElementById("fadee");

// setTimeout(function()
// {
// a.style.backgroundColor="black";
// a.display="block";
// a.style.opacity=0.5;


// },2000);
// }

// function trafficsignal(){
//     var green=document.getElementById("green");
//     var red=document.getElementById("red");
//     var yellow=document.getElementById("yellow");
    
//     red.style.opacity=1;
    
//     setTimeout(function(){
//         red.style.opacity=0;
//         yellow.style.opacity=0;
//         green.style.opacity=1;
    
//     },8000)
    
    
//     setTimeout(function(){
//         red.style.opacity=0;
//         yellow.style.opacity=1;
//         green.style.opacity=0;
    
//     },7000)
    
    
//     setTimeout(function(){
//         red.style.opacity=1;
//         yellow.style.opacity=0;
//         green.style.opacity=0;
    
//     },10000)
//     }
    
    
//     var timer=setInterval(function(){
//         trafficsignal();
    
//     },7000)
//     trafficsignal();


function slideupp()
{
    
var a=document.getElementById("slideup");
a.style.maxHeight="10px";
a.style.border="0px";
document.getElementById("ja").innerHTML="slide down";


}


function slidedownn()
{
var a=document.getElementById("slideup");
a.style.maxHeight="300px";
a.style.border="3px solid red";
document.getElementById("ja").innerHTML="slide up";



}


if(a.style.border="0px"==true)
{
    slidedownn();

}