var index = 1;
var myCheck = [];
var list = document.getElementsByTagName("li");
var activity = document.getElementsByClassName("activity");
var len = list.length;

function Add() {
    let task = document.getElementById("text").value; //doar ID
    if (index > list.length) {
        alert("You've reached the maximum number of tasks");
    }
    activity[index - 1].style.display = "block";
    list[index - 1].innerText = task;
    myCheck[index - 1] = "new";
    index++;
}
function Ready(n) {
    list[n].style.color = "greenyellow";
    list[n].style.textDecoration = "line-through";
    myCheck[n] = "rdy";
}
function Delete(n) {
    if (n == len) {
        activity[n].style.display = "none";
        index--;
        myCheck[n] = "new";
    }
    else {
        for (let i = n; i < index - 2; i++) {
            list[i].innerText = list[i + 1].innerText;
            myCheck[i] = myCheck[i + 1];
        }
        activity[index - 2].style.display = "none";
        myCheck[index - 2] = "new";
        index--;
    }
    myStyle();
}

function myStyle() {
    for (i = 0; i < len; i++) {
        if (myCheck[i] === "rdy") {
            list[i].style.color = "greenyellow";
            list[i].style.textDecoration = "line-through";
        }
        else {
            list[i].style.color = "white";
            list[i].style.textDecoration = "none";
        }
    }
}