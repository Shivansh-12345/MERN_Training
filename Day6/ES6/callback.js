// const sum=(num1,num2)=>{
//     return "sum="+(num1+num2);
// }
// const print=(msg)=>{
//     console.log(msg);
// }
// let msg=sum(20,30);
// print(msg);
// const sum=(num1,num2)=>{
//     print("sum="+(num1+num2));
// }
// const print=(msg)=>{
//     console.log(msg);
// }
// // sum(20,30);
// const sum=(num1,num2,print)=>{
//     let s=num1+num2;
//     print("sum="+s);
// }
// const print=(msg)=>{
//     console.log(msg);
// }
// sum(20,30,print);
// sum(20,30,(msg)=>{
//     console.log(msg);
// });
const sum=(num1,num2,print)=>{//higher order function
    let s=num1+num2;
    print(s);
}
const print=(msg)=>{
    console.log(msg);
}
sum(20,30,(msg)=>{
    if(sum>20){
        console.log("greater than 20");
    } else{
        console.log("less than 20");
    }
});