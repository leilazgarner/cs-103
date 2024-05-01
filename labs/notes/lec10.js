let color;
function changeColor(){
    color=document.getElementById("input").value;
    if(color==="black") {
        document.getElementById("page-wrapper").style.backgroundColor = `${color}`;
        document.getElementById("page-wrapper").style.color="white";
    }
    else{
        document.getElementById("page-wrapper").style.backgroundColor = `${color}`;
        document.getElementById("page-wrapper").style.color="black";
    }
}