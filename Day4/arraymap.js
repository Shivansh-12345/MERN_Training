let value=[1,2,3,4,5,6,7,8,9,10];
value.push(11);
console.log(value);
value.map(item=>console.log(`value X 10=${item*10}`));
//IMP
let sumValue=value.reduce((a,b)=>a*b);
console.log(`sum of array value=${sumValue}`);
let evenNum=value.filter(item=>item%2===0);
console.log(evenNum);

let data=[9,8,7,6,5,4,3,2,1];
data.pop();
console.log(data);
data.map(item=>console.log(`value X 10=${item*10}`));

let sumValue1=value.reduce((c,d)=>c+d);
console.log(`sum of array value=${sumValue1}`);