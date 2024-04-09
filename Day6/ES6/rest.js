//rest Parameters

const sum=(num1=0,num2=0,...numbers)=>{//rest parameters
    let s=0;
    if(numbers.length>0){
        s=numbers.reduce((a,b)=>a+b)
    }
    console.log("sum of numbers=",(num1+num2+s));
}
sum();
sum(12,34,12);
sum(12,34);