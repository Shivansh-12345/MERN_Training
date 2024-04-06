// practice 1: print multiple of 5
let v=prompt("enter number");
(v%5===0)?console.log("multiple of 5"):console.log("not multiple of 5");
//practice 2: print grade
let g=prompt("enter grade");
if(g<=100&&g>=90) console.log("A");
else if(g<=89&&g>=70) console.log("B");
else if(g<=69&&g>=60) console.log("C");
else if(g<=59&&g>=50) console.log("D");
else console.log("fail");