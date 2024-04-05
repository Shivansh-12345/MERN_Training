//without parameter
function msg(){
    console.log("welcome to js function");
}
msg();
function data(){
    console.log("data");
}
data();
//with parameter
function sum(num1,num2){
    let sum=num1+num2;
    console.log("sum=",sum);
}
sum(10,20);
function div(n1,n2){
    let div=n1/n2;
    console.log("div=",div);
}
div(8,2);
//with parameter & return
function mul(num1,num2){
    return num1*num2;
    
}
sum(10,20);
console.log("Multiply=",mul(2,4));
function sub(n1,n2){
    return n1-n2;
}
console.log("subtract=",sub(8,2))
let m=mul(23,4);
console.log("Multiply=",m);