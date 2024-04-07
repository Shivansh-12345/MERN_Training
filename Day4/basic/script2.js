// console.log("hello");
// window.alert("hello");
// console.log(document.body.childNodes[1]);
// document.body.childNodes[3].innertext="abcd";

// document.getElementById("heading");//value return h1
// let heading2=document.getElementsByClassName("heading2");
// console.log(heading2);

// let para=document.getElementsByTagName("p");
// console.log(para);

// let elements=document.querySelector(".heading2");//return node list
// console.dir(elements);

// let elementsall=document.querySelectorAll("p");//return node list
// console.dir(elementsall);
// console.log(document.body.firstChild);

// let div=document.querySelector("div");
// console.dir(div);

// let heading=document.querySelector("h1");

// //practice#1
// let h2=document.querySelector("h2");
// console.log(h2.innerText+"from apna college student");

//practice#2
let divs=document.querySelectorAll(".box");
let index=1
for(div of divs){
    div.innerText=`new unique${index}`;
    index++;
}
console.log(divs);