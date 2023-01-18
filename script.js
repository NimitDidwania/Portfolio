var flag=0;
function show(){
    flag = flag^1;
    if(flag){
        document.querySelector("#options").style.display = "block";
    }
    else {
        document.querySelector("#options").style.display = "none";
    }
}
var menu = document.getElementById("menu").style.display;
function hide(){
if(1){
    console.log("THIS is->");
    console.log(menu);
    console.log("<-");
    document.querySelector("#navbar ul").style.display = "none";
    flag=flag^1;
}
}