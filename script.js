var index=1;
var myCheck=[];

function Add(){
    let list = document.getElementsByTagName("li");
    let task = document.getElementById("text").value;
    let activity = document.getElementsByClassName("activity");
    if(index>list.length){
        alert("You've reached the maximum number of tasks");
    }
    activity[index-1].style.display="block";
    list[index-1].innerText=task;
    myCheck[index-1]="new";
    index++;
    }
function Ready(n){
    let done = document.getElementsByTagName("li");
    done[n].style.color="greenyellow";
    done[n].style.textDecoration="line-through";
    myCheck[n]="rdy";
}
function Delete(n){
    let close = document.getElementsByTagName("li");
    let activity = document.getElementsByClassName("activity");
    let len = close.length;
    if(n==len){
        activity[n].style.display="none";
        index--;
        myCheck[n]="new";
    }
    else{
        for(let i=n; i<index-2; i++){
            close[i].innerText=close[i+1].innerText;
            myCheck[i]=myCheck[i+1];
    }
        activity[index-2].style.display="none";
        myCheck[index-2]="new";
        index--;
    }
    mystyle();
}

function mystyle(){
    let list = document.getElementsByTagName("li");
    let len = list.length;
    for(i=0;i<len;i++){
        if(myCheck[i]==="rdy"){
            list[i].style.color="greenyellow";
            list[i].style.textDecoration="line-through";
        }
        else{
            list[i].style.color="white";
            list[i].style.textDecoration="none";
        }
    }
}