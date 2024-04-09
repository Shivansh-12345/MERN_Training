const sum=(num1,num2,num3)=>
{
    console.log("sum=",(num1+num2+num3));
}
//let value=[20,30,50];
let value=[20,30,50,60];
sum(...value);//spread operator