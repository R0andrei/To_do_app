var index=1;

function Add(){
    let lista = document.getElementsByTagName("li");
    let task = document.getElementById("text").value;
    let activity = document.getElementsByClassName("activity");
    if(index>lista.length){
        alert("You've reached maximum number of tasks");
    }
    activity[index-1].style.display="block";
    lista[index-1].innerText=task;
    index++;
    }
function Ready(n){
    let done = document.getElementsByTagName("li");
    done[n].style.color="greenyellow";
    done[n].style.textDecoration="line-through";
}
function Delete(n){
    let close = document.getElementsByTagName("li");
    let activity = document.getElementsByClassName("activity");
    if(n==9){
        activity[n].style.display="none";
        index--;
        close[n].style.color="white";
        close[n].style.textDecoration="none";
    }
    else{
        for(let i=n; i<index-2; i++){
            close[i].innerText=close[i+1].innerText;
        }
        for(let j=0; j<10; j++)
        {close[j].style.color="white";
        close[j].style.textDecoration="none";}
        activity[index-2].style.display="none";
        index--;
    }
}