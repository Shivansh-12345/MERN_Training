//expression function
const mesg=function message(){
    console.log("welcome to function expression");
}
mesg();
// const data=function d(){
//     console.log("data");
// }
// data();
//anonymous function
const msg=function (){
    console.log("welcome to function expression");
}
msg();
// const mg=function (){
//     console.log("wel");
// }
// mg();
//function expression/assignment
const sum=function ( num1,num2){
    let sum=num1+num2;
    console.log("sum=",sum);
}
sum(23,45);
// const sub=function(n1,n2){
//     let sub=n1-n2;
//     console.log("sub=",sub);
// }
// sub(45,23);

const mul=function (num1,num2){
    return num1*num2;
}
console.log("Multiply=",mul(23,6));