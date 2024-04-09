// const divi=document.getElementById("div");
// fetch("https://jsonplaceholder.typicode.com/todos/1")
//     .then(response=>response.json)
//     .then(json =>{
//     //.then(data=>{
//     let displayInfo="<table border='1'>";
//     displayInfo+="<tr>";
//     displayInfo+="<th>ID</th><th>Title</th><th>Completed</th>";
//     displayInfo+="</tr>";
//     for(person of json){
//         displayInfo+="<tr>";
//         displayInfo+=`<td>${person.id}</td>
//                     <td>${person.title}</td>
//                     <td>${person.completed}</td>`;
        
//         displayInfo+="</tr>";
//     }
//     displayInfo+="</table>";
//     divi.innerHTML=displayInfo;
// })
// .catch(error=>console.log(error));
// fetch();
const tableID=document.getElementById("table");
const fetchData= async ()=>{
const dataJSON=await fetch("https://jsonplaceholder.typicode.com/todos/1");
const data=await dataJSON.json();
let displayInfo="<table border='4'>";
displayInfo+="<tr>";
displayInfo+="<th>ID</th><th>Name</th><th>Photo</th>";
displayInfo+="</tr>";
//for(person of data){
displayInfo+="<tr>";
displayInfo+=`<td>${data.id}</td>
            <td>${data.title}</td>
            <td>${data.completed}></td>`;

displayInfo+="</tr>";

displayInfo+="</table>";
tableID.innerHTML=displayInfo;
}
fetchData();