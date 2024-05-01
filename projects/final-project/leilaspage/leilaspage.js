//my clock
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

//my shopping list
function addItem() {
    let itemInput = document.getElementById("item");
    let itemName = itemInput.value;
    if (itemName === "") {
    }
    /* here I used the HTML attribute "<input type="checkbox">", although we did not go through this in lecture,
    I did my own research on, https://www.w3schools.com/tags/att_input_type_checkbox.asp,
    It is a box and when clicked it shows a check mark. I used this attribute so that users can check things they got from the store */
    let groceryList = document.getElementById("grocery-list");
    let newItem = document.createElement("li");
    newItem.innerHTML = `<input type="checkbox" onchange="toggleDone(this)"> ${itemName}`;
    groceryList.appendChild(newItem);
    itemInput.value = "";
}

/* Here I used "onchange="toggleDone(this)", although we did not go through this in lecture, I did my own research and here I will explain my process. An “onchange” event is used when the value of an HTML element is changed (in my case when the checkbox goes from non-checked to checked).
I also used toggle and named it “done” so that it adds the "done" class to the parent <li> element, which applies a strikethrough (written in the css page) to the item when the box is checked. “This” refers to the context where the function is supposed to run, here I  refer to the checkbox element that triggered the onchange event.
This allows the toggleCompleted function to change the checkbox element, so that it can determine its state and whether to apply the strikethrough to the list. I hope that made any sense, but here are the sources I looked at.
https://www.w3schools.com/howto/howto_js_toggle_class.asp
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this
https://www.w3schools.com/jsref/event_onchange.asp.*/

function toggleDone(checkbox) {
    let listItem = checkbox.parentElement;
    if (checkbox.checked) {
        listItem.classList.add("done");
    } else {
        listItem.classList.remove("done");
    }
}

function clearList() {
    let groceryList = document.getElementById("grocery-list");
    groceryList.innerHTML = "";
}

