let booleanVar = false;

function boo(){
    if (booleanVar === false) {
        document.getElementById("cat").style.display = "block";
        document.getElementById("creep").style.display = "none";
        booleanVar = true;
    }
    else {
        document.getElementById("cat").style.display = "none";
        document.getElementById("creep").style.display = "block";
        booleanVar = false;
    }
}