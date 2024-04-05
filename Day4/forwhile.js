// for(let i=0;i<10;i++){
//    console.log("value of I=",i);
// }
// let j=0;
// while(j<10){
//    console.log("value of j=",j)
//    j++;
// }
let data=[10,20,30,40,50,60];
// for(let i=0;i<data.length;i++){
//     if(data[i]%3===0){
//         console.log("success");
//         continue;
//     }
//     console.log("data=",data[i]);
// }
let i=0;
while(i<data.length){
    if(data[i]%3===0){
        console.log("error");
    }
    console.log(data[i]);
}