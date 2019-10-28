const KEY = "e6c0888a";
const id =new URLSearchParams(window.location.search).get('id');
let myFilm = document.getElementById("myFilm");
getMovieDetails();

function getMovieDetails() {
    fetch("http://www.omdbapi.com/?apikey=" + KEY + "&i="+id)
        .then(res => res.json())
        .then(json => displayMovieDetails(json))
        .catch(err => console.error(err));

}
function displayMovieDetails(json){
    console.log(json);
    let fMovie = document.createElement("div");

    fMovie.className = "card mb-3";
    fMovie.style ="background-color: darkgrey";
    let fFrame =document.createElement("div");
    fFrame.className = "row no-gutters";
    let fPicture =document.createElement("div");
    fPicture.className = "col-md-4";
    fPicture.style ="max-width: 540px;";
    let fInnerFrame = document.createElement("div");
    fInnerFrame.style = "col-md-8";
    let fFrameBody = document.createElement("div");
    fFrameBody.style = "card-body";
    let fTitle = document.createElement("h1");
    fTitle.style = "card-title"
    fTitle.innerText =json.Title;


    let fDetails = document.createElement('p');
    fDetails.style= "card-text";
    let fPoster = document.createElement('img');

    let fReview = document.createElement('progress');
    fReview.setAttribute('value', json.Metascore);
    fReview.setAttribute('max', '100');
    
    fPoster.setAttribute('src', json.Poster);
    fDetails.innerText ="Type: "+json.Type+"\n"
                       +"Year: "+json.Year+"\n"
                       +"Actors: "+json.Actors+"\n"
                       +"Awards: "+json.Awards+"\n"
                       +"Country: "+json.Country+"\n"
                       +"Director: "+json.Director+"\n"
                       +"Genre: "+json.Genre+"\n"
                       +"Language: "+json.Language+"\n"
                       +"Plot Summary: "+json.Plot+"\n"
                       +"Runtime: "+json.Runtime+"\n"
                       +"Release Date: "+json.Released+"\n"
                       +"metascore: "+ json.Metascore;
    
    
    //ffff
   
    fPicture.appendChild(fPoster);
    
    fFrameBody.appendChild(fTitle);
    fFrameBody.appendChild(fDetails);
    fFrameBody.appendChild(fReview);
    fInnerFrame.appendChild(fFrameBody);

    fFrame.appendChild(fPicture);
    fFrame.appendChild(fInnerFrame)
    
    fMovie.appendChild(fFrame);
   


        //cardNew();

    myFilm.appendChild(fMovie);
}
