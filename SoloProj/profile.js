
//let data;

let recommended = document.getElementById("profile");

function getProf(){
     
    fetch('http://localhost:8080/item/users', { method: 'GET' })
    .then((response) => response.json())
    .then((json) => printMembers(json))
    .catch(err => console.log(err));
}
 function printMembers(data){
   
    data.forEach(m => {
     let body = document.createElement('div');
     body.className ="card";
     body.style="border: 2px solid black";
     let title = document.createElement('h2');
     let details = document.createElement('p');
    
   
     title.innerText = "Username: "+m.username+"\n";
     body.appendChild(title);
     details.innerText = "Favourite Game: "+m.favourite_Game+"    "
                 
                 +"Genre: "+m.genre1+"    "
                 +"Genre: "+m.genre2+"\n"
                 +"platform: "+ m.platform+"\n";
                  body.appendChild(details);
    
    
                  let space = document.createElement('div');
                  //space.style = "height:50";
                  
                  //space.style = "  margin: 30px background-color: #ffffff border: 1px solid black opacity: 0.6 filter: alpha(opacity=60)";
     recommended.appendChild(body);
     recommended.appendChild(space);
    
   
 });
}