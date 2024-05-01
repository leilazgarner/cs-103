let input;
function OpenFreezer(){
    input=document.getElementById("flavor").value;
    document.getElementById("Welcome-message").innerHTML="I love "+ input + " too, but my personal favorite is Americone Dream." +
        " Hover your mouse over the yummy ice cream to learn more about it!";
    document.getElementById("text-container").style.visibility = "visible";
}