let first;
let second;
let color;

function clearInput(){
    first=document.getElementById("first-number").value = '';
    second=document.getElementById("second-number").value = '';
    document.getElementById('output').innerHTML = '';
}
function addition(){
    first=document.getElementById("first-number").value;
    second=document.getElementById("second-number").value;
    let result=Number(first)+Number(second);
    document.getElementById('output').innerHTML = String(result);
    if (isNaN(Number(result))) {
        document.getElementById("output").style.display = "block";
        document.getElementById("output").innerHTML = "Dont get crabby, but that isn't a number!";
    }
    colorChange();
}
function subtraction() {
    first=document.getElementById("first-number").value;
    second=document.getElementById("second-number").value;
    let result=Number(first)-Number(second);
    document.getElementById('output').innerHTML = String(result);
    if (isNaN(Number(result))) {
        document.getElementById("output").style.display = "block";
        document.getElementById("output").innerHTML = "Oh crab, but that isn't a number!";
    }
    if (result < 0) {
        document.getElementById('output').style.color = 'red';
    } else {
        document.getElementById('output').style.color = 'black';
    }
}
function multiplication() {
    first=document.getElementById("first-number").value;
    second=document.getElementById("second-number").value;
    let result=Number(first)*Number(second);
    document.getElementById('output').innerHTML = String(result);
    if (isNaN(Number(result))) {
        document.getElementById("output").style.display = "block";
        document.getElementById("output").innerHTML = "Pinch pinch, but that isn't a number!";
    }
    if (result < 0) {
        document.getElementById('output').style.color = 'red';
    } else {
        document.getElementById('output').style.color = 'black';
    }
}
function division() {
    first=document.getElementById("first-number").value;
    second=document.getElementById("second-number").value;
    let result=Number(first)/Number(second);
    document.getElementById('output').innerHTML = String(result);
    if (result < 0) {
        document.getElementById('output').style.color = 'red';
    }
    if (isNaN(Number(result))) {
        document.getElementById("output").style.display = "block";
        document.getElementById("output").innerHTML = "You silly crab, that isn't a number!";
    }
    else {
        document.getElementById('output').style.color = 'black';
    }

}
function power() {
    first = document.getElementById("first-number").value;
    second = document.getElementById("second-number").value;
    let result = 1;
    for (let i = 0; i < second; i=i+1) {
        result=first*result;
    }
    document.getElementById('output').innerHTML = String(result);
    if (result < 0) {
        document.getElementById('output').style.color = 'red';
    }
    else {
        document.getElementById('output').style.color = 'black';
    }
}

function colorChange(){
    if (result < 0) {
        document.getElementById('output').style.color = 'red';
    } else {
        document.getElementById('output').style.color = 'black';
    }
}
