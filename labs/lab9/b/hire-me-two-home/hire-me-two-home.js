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