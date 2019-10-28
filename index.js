function clicked(el) {
    let bttn =document.getElementById('button');
   let clicked= document.getElementById('output');
   if(clicked.innerHTML === 'Off'){
       clicked.innerHTML ='On'
   }
   else{
       clicked.innerHTML ='Off'
   }
}

function reset(fl){
    let bttn =document.getElementById('button');
    let clicked= document.getElementById('output');
    if(bttn.innerHTML === 'Reset'){
        clicked.value ='Off'

    }
}


  
  


