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
var width = Math. max(window. innerWidth);
console.log(width);
function hide(){
if(width <= 500){
    console.log("THIS is->");
    console.log(menu);
    console.log("<-");
    document.querySelector("#navbar ul").style.display = "none";
    flag=flag^1;
}
}