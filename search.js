const KEY = "e6c0888a";
fetch("http://www.omdbapi.com/?apikey="+KEY+"&s=real")
    .then(res => res.json())
    .then(json => console.log(json));