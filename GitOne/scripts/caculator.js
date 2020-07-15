var i=0;
console.log("JavaScipt loaded"+i);

function cool(){
    console.log("hooooo");
}

var el = document.getElementById("zero");
console.log(el)
el.addEventListener("click", cool, true);
i++;