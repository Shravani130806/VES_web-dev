let currentLight = "red";

const button=document.getElementById("change-light");
button.addEventListener("click",function(){
    console.log("hgfd");
    document.getElementById("red").classList.remove("red");
    document.getElementById("yellow").classList.remove("yellow");
    document.getElementById("green").classList.remove("green");

if(currentLight==="red")
{currentLight="yellow";}
else if(currentLight==="yellow")
{currentLight="green";}
else{currentLight="red"}

document.getElementById(currentLight).classList.add(currentLight);

});