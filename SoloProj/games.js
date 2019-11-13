
//let data;

let recommended = document.getElementById("recommended");

function getRec(){
     
    fetch('http://localhost:8080/item/games', { method: 'GET' })
    .then((response) => response.json())
    .then((json) => printMembers(json))
    .catch(err => console.log(err));
}
 function printMembers(data){
   
    data.forEach(m => {
     let body = document.createElement('div');
     body.className ="card";
     let title = document.createElement('h2');
     let details = document.createElement('p');
    
   
     title.innerText = "Title: "+m.name+"\n";
     body.appendChild(title);
     details.innerText = "Rating: "+m.age+"\n"
                 +"Release Date: "+m.releaseDate+"\n"
                 +"Genre: "+m.genre1+"\n";
                  body.appendChild(details);
    
    
    
     recommended.appendChild(body);
    
   
 });
}