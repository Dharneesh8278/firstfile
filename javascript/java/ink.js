let a=20;
let q=1,c;
let d=10;
let n=a;
let b=a*d;

document.getElementById("amo").innerHTML=a; 
document.getElementById("qua").innerHTML=q; 


function minus()
{
    a=a-n;
    q--;
    
document.getElementById("amo").innerHTML=a; 
document.getElementById("qua").innerHTML=q; 
document.getElementById("amo").style.color="black"; 



if(a<n)
{
    q=1;
    a=n;
    document.getElementById("amo").innerHTML=a; 
document.getElementById("qua").innerHTML="1";     

}


    
}
function plus()
{
    a=a+n;
    q++;
    
document.getElementById("amo").innerHTML=a; 
document.getElementById("qua").innerHTML=q; 


if(q>=d)
{
    q=10;
    // q--;
    a=b;
    document.getElementById("amo").innerHTML="you have reached the limit to buy"; 
    document.getElementById("amo").style.color="red"; 
    document.getElementById("qua").innerHTML=q; 
    // document.getElementById("mo").innerHTML=; 
    c=1;
    


}
// if(c=1)
//     {
//     document.getElementById("amo").style.color="black"; 

//     }



    
}