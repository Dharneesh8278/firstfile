// const laptops=["hp","lenovo","asus","acer"];
//  laptops[0]="msi";
//  laptops.push("lenovo");
//  document.getElementByid("data").innerHTML=laptops;


// const laptop=
// {
//     brand:"lenovo",
//     model:"x43354",
//     color:"gray",
//     ram:"1gb",

// }
// laptop.color="red";
// laptop.storage="1tb";
// laptop.opticaldisk="yes it has optical disk"
// document.getElementById("obj").innerHTML=laptop.brand+","+laptop.model+","+laptop.color+","+laptop.ram+","+laptop.storage+","+laptop.opticaldisk;


// function table()
// {let i =prompt("enter the value of i:");
// alert("the value of i is"+i);
// let j=prompt("enter the value of j:");
// alert("the value of j is"+j);
// for(i=1,i<=10,i++)
function table()
{
    
let i =prompt("enter the value of i");
alert("value of i is:"+i);
// let j=prompt("enter teh value of j");
// alert("value of j is"+j);
for(let j=1;j<=12;j++)
{
var res=i*j;
// const result=res;
document.write(`${i} *  ${j} = ${res}`+"<br>");

}

}