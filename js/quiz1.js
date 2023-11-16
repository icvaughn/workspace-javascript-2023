//generate the number for sickers

function randInt(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}

var M  = randInt(300,600);
var N = randInt(100,M);
var K = randInt(1, N);
console.log(M);

// put the random into html

document.getElementById("stick1").textContent = M.toString();
document.getElementById("stick2").textContent = N.toString();
document.getElementById("stick3").textContent = K.toString();

//generate correct Answer
var t = N + K;
var s = N - K;
document.querySelector('[value = "4"]').nextSibling.nodeValue = M.toString()+" - "+N.toString()+" - "+K.toString();
document.querySelector('[value = "1"]').nextSibling.nodeValue = M.toString()+" - "+t.toString()+" - "+K.toString();
document.querySelector('[value = "2"]').nextSibling.nodeValue = M.toString()+" - "+N.toString()+" - "+s.toString();
document.querySelector('[value = "3"]').nextSibling.nodeValue = t.toString()+" - "+N.toString()+" - "+s.toString();


// Action -- clic and change style
function changeStyle(e){
    e.preventDefault();

    var classname = this.getAttribute("class");

    //change of the style of this element
    if (classname == "answer") {
        this.setAttribute("class","answer selected");
    }
    else{
        this.setAttribute("class","answer");
    }

    //this.animate([{transform:'rotate(0deg)'},{transform:'rotate(180deg)'}],{duration:3000,fill:"forwards"});
}


for (var i = 0; i<4;i++){
    document.getElementsByClassName("answer")[i].addEventListener("click", changeStyle, false);
}

for (var i = 0; i<4;i++){
    document.getElementsByClassName("answer selected")[i].addEventListener("click", changeStyle, false);
}