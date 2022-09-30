function backticks()
{
let a="revanth";
let b ="maddi";
let c=`REVANTH MADDI ${a} ${b}!`;
document.getElementById("id10").innerHTML=c;

}


function unorderedlist()
{
let a="unorderedlist";
let b=["list1","list2","list3"];
let c=`<h2>${a}</h2> <ol type="circle">`;
for (var y of b){
c + ` <li $(y) </li>`;

}
c + `</ol>`;
document.getElementById("id11").innerHTML=b;

}

