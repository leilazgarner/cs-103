let first;
let second;

function addition() {
    first=document.getElementById("first-number").value;
    second=document.getElementById("second-number").value;
    let result=Number(first)+Number(second);
    document.getElementById('output').innerHTML = String(result);
}
function subtraction() {
    first=document.getElementById("first-number").value;
    second=document.getElementById("second-number").value;
    let result=Number(first)-Number(second);
    document.getElementById('output').innerHTML = String(result);
}
function multiplication() {
    first=document.getElementById("first-number").value;
    second=document.getElementById("second-number").value;
    let result=Number(first)*Number(second);
    document.getElementById('output').innerHTML = String(result);
}
function division() {
    first=document.getElementById("first-number").value;
    second=document.getElementById("second-number").value;
    let result=Number(first)/Number(second);
    document.getElementById('output').innerHTML = String(result);
}

