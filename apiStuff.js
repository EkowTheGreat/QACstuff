const xhr = new XMLHttpRequest();
xhr.onload = ()=> output(xhr.responseText);
xhr.open('GET',"https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json");
xhr.send();


let data;

let minfo = document.getElementById("minfo");

function output(text){
    data=JSON.parse(text);
    let el =document.createElement('p');
    el.innerText ="Active: "+ data.active;
    let squad = document.createElement('div');
    let title = document.createElement('h1');
    title.innerText = data.squadName;
    squad.appendChild(title);
    minfo.appendChild(squad);
    el.innerText = "Formed: "+data.formed+"\n"
                 +"Hometown: "+data.homeTown +"\n"
                 +"Secret Base: " + data.secretBase+"\n";
                 squad.appendChild(el);
    printMembers(data);
    
}
function printMembers({members}){
   
    members.forEach(m =>{
    let hero = document.createElement('div');
    let head = document.createElement('h2');
    let p = document.createElement('p');
    
   
    head.innerText = "Member: "+m.name+"\n";
    hero.appendChild(head);
    p.innerText = "Age: "+m.age+"\n"
                +"Secret Identity: "+m.secretIdentity+"\n"
                +"Powers: "+m.powers+"\n";
                 hero.appendChild(p);
    
    
    
    minfo.appendChild(hero);
    
   
});
}
