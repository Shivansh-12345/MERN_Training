const tableID=document.getElementById("table");
const fetchData= async ()=>{
const dataJSON=await fetch("https://api.github.com/users");
const data=await dataJSON.json();
let displayInfo="<table border='1'>";
displayInfo+="<tr>";
displayInfo+="<th>ID</th><th>Name</th><th>Photo</th>";
displayInfo+="</tr>";
for(person of data){
displayInfo+="<tr>";
displayInfo+=`<td>${person.id}</td>
            <td>${person.login}</td>
            <td><img src=${person.avatar_url} width=${200} height=${200}/></td>`;

displayInfo+="</tr>";
}
displayInfo+="</table>";
tableID.innerHTML=displayInfo;
}
fetchData();
// fetch("https://api.github.com/users")
// .then(dataJSON=>dataJSON.json())
// .then(data=>{
//     for(person of data){
//         displayInfo+="<tr>";
//         displayInfo+=`<td>${person.id}</td>
//                     <td>${person.login}</td>
//                     <td><img src=${person.avatar_url} width=${200} height=${200}/></td>`;
        
//         displayInfo+="</tr>";
//     }
//     displayInfo+="</table>";
//     tableID.innerHTML=displayInfo;
// })
// .catch(error=>{

// })
// fetchData();

