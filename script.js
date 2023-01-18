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
var x = window.matchMedia("(max-width: 500px)")
myFunction(x)  