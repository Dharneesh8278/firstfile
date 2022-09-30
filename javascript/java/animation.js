function anmate()
{
let a=0;
const b1 =document.getElementById("child1");
const b2=document.getElementById("child2");
const b3 =document.getElementById("child3");
const b4=document.getElementById("child4");


let pos=0;
 clearInterval(a);
 a=setInterval(movingtime,10);
 function movingtime(){
if( pos== 127){

    clearInterval(a);

}
else{
pos++;
b1.style.top= pos+"px";
b1.style.left= pos+"px";
b2.style.top=pos+"px";
b2.style.right= pos+"px";
b3.style.bottom= pos+"px";
b3.style.left= pos+"px";
b4.style.bottom= pos+"px";
b4.style.right= pos+"px";
}}}

// let pos=127;
// clearInterval(a);
// a= setInterval(movingtime,10);
// function movingtime(){
//     if (pos=127){

//         clearInterval(a);
//     }
// }


// else if{
// pos--;
// b1.style.


// }

