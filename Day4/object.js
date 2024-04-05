let studentInfo={
    rollno:1,
    name:"sd",
    course:"MCA",
    college:"KIET",
    marks:[10,23,45,67,78],
    music:()=>console.log("play music"),
    play:function playfun(){console.log("play cricket")},
}
let arrayvalue=[studentInfo,studentInfo,studentInfo];
arrayvalue.forEach(item=>console.log(item.name));
//console.log(studentInfo.name);
console.log(studentInfo.music());
console.log(studentInfo.play());
console.log(studentInfo.marks);

//console.log(studentInfo);
//console.log(studentInfo.marks.map);
