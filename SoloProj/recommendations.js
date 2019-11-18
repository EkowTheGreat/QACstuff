let recommended = document.getElementById("recommended");
function dipSesh(){
    if(sessionStorage.id == null)
    {
        
        document.getElementById("account").innerHTML = "login";
        document.getElementById("account").href = "./login.html";
    }
    else{
        
        document.getElementById("account").innerHTML="My Profile";
        document.getElementById("account").href = "./profile.html";
        document.getElementById("profileDisplayText").innerText=sessionStorage.username;
    }
    
}
function getRec(){
     
    fetch('http://localhost:8080/item/recommendations', { 
        method: 'POST' ,
        body: JSON.stringify({UserId: sessionStorage.id}),
        headers: { 'Content-Type': 'application/json' }
    })
    .then((response) => response.json())
    .then((json) => printMembers(json))
    .catch(err => console.log(err));
}
 function printMembers(data){
   
    data.forEach(m => {
     document.getElementById("gameTitleText").innerText = m.name;
     document.getElementById("releaseDate").value = m.age;
     document.getElementById("rating").value = m.releaseDate;
     document.getElementById("publisher").value = m.publisher;
   
     
  
    
     
    
   
 });
}
function saveDetails(){
    let genre1 = document.getElementById("genre1");
    let genre2 = document.getElementById("genre2");
    let genre3 = document.getElementById("genre3");
    let platform = document.getElementById("platform");
    let gametype = document.getElementById("gametype");
    if (typeof(Storage) !== "undefined") {
        
          //sessionStorage.id = 0;
          sessionStorage.genre1 = genre1.value;
          sessionStorage.genre2 = genre2.value;
          sessionStorage.genre3 = genre3.value;
          sessionStorage.platform = platform.value;
          sessionStorage.gametype = gametype.value;
          
        
        //console.log(sessionStorage.genre1);
    }
getRec();

}