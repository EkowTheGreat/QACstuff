const KEY = "e6c0888a";

let data = document.getElementById("mySearchBar");
let myResults = document.getElementById("myResults");

function getMovieDetails() {
    fetch("http://www.omdbapi.com/?apikey=" + KEY + "&s=" + data.value)
        .then(res => res.json())
        // .then(json => console.log(json))
        .then(json => myDisplay(json))
        .catch(err => console.error(err));

}
function myDisplay({Search}) {
    Search.map(m =>{
            // res.Search.forEach(film => {
         let fMovie = document.createElement('div');
         fMovie.className = "card m-5 w-25";
         fMovie.style ="background-color: darkgrey";
         fMovie.addEventListener('click',() => window.location.href ='./film.html?id='+m.imdbID);
         //fMovie.style="card-header bg-transparent border-success";
         
         let fDetails = document.createElement('h3');
         let fPoster = document.createElement('img');
        fPoster.setAttribute('src', m.Poster);
         fDetails.innerText = "Title: "+m.Title+"\n"
                             +"Type: "+m.Type+"\n"
                             +"Year: "+m.Year+"\n";
        fMovie.appendChild(fDetails);
        fMovie.appendChild(fPoster);
        myResults.appendChild(fMovie);
        
        

    })
}