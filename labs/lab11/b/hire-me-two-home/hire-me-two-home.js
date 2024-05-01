function check(){
    let age=document.getElementById("age").value;
    if (Number(age) >= 18 && Number(age) <= 120) {
        document.getElementById("container").style.visibility="visible";
        document.getElementById("output").style.display="none";

    }
    //If the user enters a negative number: an output shall be displayed stating the fact that a negative number is not acceptable.
    else if (Number(age) < 0) {
            document.getElementById("output").style.display = "block";
            document.getElementById("output").innerHTML = "Negative number is not acceptable";

    }
    //Else if the user enters a letter, word, or sentence: an output shall be displayed stating the fact that the users has failed to enter a number
    else if (isNaN(Number(age))) {
        document.getElementById("output").style.display = "block";
        document.getElementById("output").innerHTML = "User has failed to enter a number";
    }
    //Else If the user enters a decimal, instead of a whole number: an output shall be displayed stating the fact that the user has not enter a valid age.
    else if (Number(age)%1 !==0) {
        document.getElementById("output").style.display = "block";
        document.getElementById("output").innerHTML = "User has failed to enter a age";
    }
    //Else: an output shall be displayed stating You may not see the content.
    else {
        document.getElementById("output").style.display = "block";
        document.getElementById("output").innerHTML = "You may not see the content";
    }
}


//Converting military time to AM/PM
let today= new Date();
let day = today.getDate();
let month = today.getMonth();
let year = today.getFullYear();

if (day < 10) {
    day = '0' + day
}
if (month < 10) {
    month = '0' + month
}

let hour = today.getHours();
let min = today.getMinutes();
let ampm;

if (hour < 12) {
    ampm="AM";
    if (hour<10 && hour!==0){
        hour="0"+hour;
    }
    if(hour===0){
        hour=12;
    }

} else{
   ampm="PM";
   if(hour-12<10 && hour-12!==0) {
       hour = "0"+(hour-12);
   }else if(hour-12>=10){
       hour=hour-12;
   } else {
       hour=12;
   }
}

if (min<10){
    min="0"+min;
}


document.getElementById("time-date").innerHTML =
    `
    <h4>${hour + ":" + min + ampm}</h4>
    <h5>${day + "/" + month + "/" + year}</h5>
    `

;