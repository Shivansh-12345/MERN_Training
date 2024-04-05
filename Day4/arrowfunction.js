//react reference return multiple line
const msg=()=>{
    console.log("welcome to arrow function");
 console.log("welcome to arrow function Again");
}
msg();

const sum=(num1,num2)=>console.log("sum=",(num1+num2));
sum(23,56);
// const sub=(n1,n2)=>console.log("sub=",(n1-n2));
// sub(56,23);
//const mul=(num1,num2)=>num1*num2;
// console.log("Mutiply=",mul(23,56));
// const div=(n1,n2)=>n1/n2;
//console.log("divide=",div(72,9));
//const mul=function(num1,num2) {
//    return num1*num2;
//}
//console.log("multiply=",mul(23,56))
const div=function(num1,num2) {
    return num1/num2;
}
console.log("multiply=",div(6,2))
