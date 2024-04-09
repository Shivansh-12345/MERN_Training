let age=16;
const info=new Promise((resolve,reject)=>{
    if(age>=18){
        resolve("you can vote");
    } else{
        reject("you can't vote");
    }
})
info.then(result=>console.log(result))//it is used when resolve is used
.catch(error=>console.log(error));//it is used when reject is used

//async await is used only in function
const resultInfo=async ()=>{
    try{
    let result=await info;
    console.log(result);
} catch(error){
    console.log(error);
}}
resultInfo();