function myform(){
let x=document.getElementById("box1").value
let y=document.getElementById("box2").value
let z=document.getElementById("box3").value
let z1=document.getElementById("box4").value
let z2=document.getElementById("box5").value
let z3=document.getElementById("box6").value
let z4=document.getElementById("box7").value
let a;
if(!isNaN(x)|| x<1)
{
    a="not valid";
    document.getElementById("demo").innerHTML=a;

    document.getElementById("box1").style.border="2px solid red";
    document.getElementById("demo").style.color= "red";
}

else  
{
a="valid number";
document.getElementById("demo").innerHTML=a;

document.getElementById("box1").style.border="2px solid green";
document.getElementById("demo").style.color="green";
}
if(!isNaN(y)|| y<1)
{
a="not valid";
document.getElementById("demo1").innerHTML=a;
    
document.getElementById("box2").style.border="2px solid red";
document.getElementById("demo1").style.color= "red";
 }
    
else  
{
a="valid number";
document.getElementById("demo1").innerHTML=a;
    
document.getElementById("box2").style.border="2px solid green";
 document.getElementById("demo1").style.color="green";
    
}

if(!isNaN(z)|| z<1)
{
a="not valid";
document.getElementById("demo2").innerHTML=a;
document.getElementById("box3").style.border="2px solid red";
 document.getElementById("demo2").style.color= "red";
}
        
else  
{
a="valid number";
document.getElementById("demo2").innerHTML=a;
        
document.getElementById("box3").style.border="2px solid green";
document.getElementById("demo2").style.color="green";
        
}

if(isNaN(z1)|| z1<1)
{
a="not valid";
document.getElementById("demo3").innerHTML=a;
document.getElementById("box4").style.border="2px solid red";
 document.getElementById("demo3").style.color= "red";
}
        
else  
{
a="valid number";
document.getElementById("demo3").innerHTML=a;
        
document.getElementById("box4").style.border="2px solid green";
document.getElementById("demo3").style.color="green";
        
}

if(!isNaN(z2)|| z2<1)
{
a="not valid";
document.getElementById("demo4").innerHTML=a;
document.getElementById("box5").style.border="2px solid red";
 document.getElementById("demo4").style.color= "red";
}
        
else  
{
a="valid number";
document.getElementById("demo4").innerHTML=a;
        
document.getElementById("box5").style.border="2px solid green";
document.getElementById("demo4").style.color="green";
        
}
if(!isNaN(z3)|| z3<1)
{
a="not valid";
document.getElementById("demo5").innerHTML=a;
document.getElementById("box6").style.border="2px solid red";
 document.getElementById("demo5").style.color= "red";
}
        
else  
{
a="valid number";
document.getElementById("demo5").innerHTML=a;
        
document.getElementById("box6").style.border="2px solid green";
document.getElementById("demo5").style.color="green";
        
}
if(isNaN(z4)|| z4<1)
{
a="not valid";
document.getElementById("demo6").innerHTML=a;
document.getElementById("box7").style.border="2px solid red";
 document.getElementById("demo6").style.color= "red";
}
        
else  
{
a="valid number";
document.getElementById("demo6").innerHTML=a;
        
document.getElementById("box7").style.border="2px solid green";
document.getElementById("demo6").style.color="green";
        
}
}

     
