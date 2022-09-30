// class student{
// constructor (stdname,stdyear){
// this.stdname=stdname;
// this.stdyear=stdyear;
// // this.stdmobile=this.stdmobile;
// // this.stdbranch=this.stdbranch;
// }
// stdprogress(){
// let date=new Date();
// return date.getFullYear()-this.stdyear;
// }
// }
// let std1=new student("revanth",2000);
// document.getElementById("construct1").innerHTML="revanth is"+std1.stdprogress()+"yearsold";

// let std2=new student("chaitanya",2001);
// document.getElementById("construct2").innerHTML="chaitanyafsdg is"+std2.stdprogress()+"yearsold";


function mynode()
{
const a =document.createElement("p");
const b =document.createTextNode("this is another para is para3");
a.appendChild(b);

const c=document.getElementById("div1");
const d=document.getElementById("p2");
c.insertBefore(a,d);

}



