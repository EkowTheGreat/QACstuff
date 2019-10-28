
const n1 = document.getElementById("num1");
const n2 = document.getElementById("num2");
let clicked= document.getElementById("output");

document.getElementById('add').addEventListener('click',(event) => console.log(n1.value+" + "+n2.value+" = "+(parseInt(n1.value)+parseInt(n2.value))));
document.getElementById('sub').addEventListener('click',(event) => console.log(n1.value+" - "+n2.value+" = "+(parseInt(n1.value)-parseInt(n2.value))));
document.getElementById('mult').addEventListener('click',(event) => console.log(n1.value+" * "+n2.value+" = "+parseInt(n1.value)*parseInt(n2.value)));
document.getElementById('div').addEventListener('click',(event) => console.log(n1.value+" / "+n2.value+" = "+parseInt(n1.value)/parseInt(n2.value)));


function add() {
    let ans = document.createElement('p');
    clicked.innerText = parseInt(n1.value)+parseInt(n2.value);
    ans.innerText =n1.value+" + "+n2.value+" = "+clicked.innerText;
    mhistory.appendChild(ans);
    
    
    
}
function sub(a, b) {
    clicked.innerText =parseInt(n1.value)-parseInt(n2.value);
    let ans = document.createElement('p');
    ans.innerText =n1.value+" + "+n2.value+" = "+clicked.innerText ;
    mhistory.appendChild(ans);
    
}
function mult(a, b) {
    let ans = document.createElement('p');
    ans.innerText =n1.value+" + "+n2.value+" = "+parseInt(n1.value)*parseInt(n2.value) ;
    mhistory.appendChild(ans);
    clicked.innerText =parseInt(n1.value)*parseInt(n2.value);
}
function div(a, b) {
    let ans = document.createElement('p');
    ans.innerText =n1.value+" + "+n2.value+" = "+parseInt(n1.value)/parseInt(n2.value);
    mhistory.appendChild(ans);
    clicked.innerText =parseInt(n1.value)/parseInt(n2.value);
}

