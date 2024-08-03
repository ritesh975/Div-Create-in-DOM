// Question 1
/*let h2=document.querySelector("h2")
console.log(h2.innerText);
h2.innerText=h2.innerText+"from apna collage student";
console.log(h2.innerText);*/


// Question no 2
// let divs=document.querySelectorAll(".box");
// console.log(divs[0]);
// divs[0].innerText="new unique value 1";
// divs[1].innerText="new unique value 2";
// divs[2].innerText="new unique value 3";
// ******** OR ***********
// Question no 2
let divs=document.querySelectorAll(".box");
let idx=1;
for(div of divs)
{
    console.log(div);
    console.log(div.innerText);
    div.innerText=`new unique value ${idx}`;
    idx++;

}