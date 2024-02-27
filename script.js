const randomdisplay = document.getElementById("random-number");
const randomizebtn = document.getElementById("randomize-btn");
const value = document.getElementById("value");
const send = document.getElementById("send");

//let howmany = prompt("How many number?")

let howmany = 10;

randomizebtn.onclick = function () {
    let randomnumber = Math.floor(Math.random()*howmany + 1);
    randomdisplay.innerText = randomnumber;
}
