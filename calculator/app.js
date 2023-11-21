let outputScreen=document.getElementById("outputScreen");

function display(num){
    outputScreen.value+=num;
}

function calculate(){
    try{
        outputScreen.value=eval(outputScreen.value);
    }
    catch{
        alert("invalid")
    }
}
function ac(){
    outputScreen.value= null;
}

function clear(){
    outputScreen.value = "";
}

function del(){
    outputScreen.value = outputScreen.value.silce(0,-1);
}