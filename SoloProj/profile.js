
function getProf() {
    fetch('http://localhost:8080/item/users/3', { method: 'GET' })
        .then((response) => response.json())
        .then((json) => adusname(json))
        .catch(err => console.log(err));

    // fetch('http://localhost:8080/item/users/0', { method: 'GET' })
    // .then((response) => response.json())
    // .then((json) => adusname(json))
    // .catch(err => console.log(err));

}
function adusname(data) {
    let uname = document.getElementById("userName");
    let pword = document.getElementById("password");
    let fgame = document.getElementById("favgame");
    let g1 = document.getElementById("genre1");
    let g2 = document.getElementById("genre2");
    let g3 = document.getElementById("genre3");
    let plat = document.getElementById("platform");
    uname.value = data.username;
    pword.value = data.password;

    if (data.favourite_Game != null) {
        fgame.value = data.favourite_Game;
    }
    //fgame.value = data.favourite_Game != null ? data.favourite_Game : fgame.value;

    if (data.genre1 != null) {
        g1.value = data.genre1;
    }
    if (data.genre2 != null) {
        g2.value = data.genre2;
    }
    if (data.genre3 != null) {
        g3.value = data.genre3;
    }
    if (data.platform != null) {
        plat.value = data.platform;
    }


}
function saveProf() {

    //alert("Profile Saved");
    fetch('http://localhost:8080/item/3', {
        method: 'PUT',
        //body: JSON.stringify({ password: 'sniperg' }),
        
        body: JSON.stringify(makeBody()),
        headers: { 'Content-Type': 'application/json' }
    })
        .then((response) => console.log(response))
        .catch(err => console.log(err));


    //location.reload();
makeBody();

}
function makeBody() {
    let uname = document.getElementById("userName");
    let pword = document.getElementById("password");
    let fgame = document.getElementById("favgame");
    let g1 = document.getElementById("genre1");
    let g2 = document.getElementById("genre2");
    let g3 = document.getElementById("genre3");
    let gtype = document.getElementById("gametype");
    let plat = document.getElementById("platform");

    const deets = {
        username: uname.value,
        password: pword.value,
        favourite_Game: fgame.value,
        genre1: g1.value,
        genre2: g2.value,
        genre3: g3.value,
        platform: plat.value,
        gametype: gtype.value
    };

  


     console.log(deets);

    return deets;

}