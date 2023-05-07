var ran1 = Math.floor(Math.random() * 6) + 1;
var ran2 = Math.floor(Math.random() * 6) + 1;
// var ranImage = "dice" + ran + ".png";
var ranSource1 = "images/" + "dice" + ran1 + ".png";
var ranSource2 = "images/" + "dice" + ran2 + ".png";
console.log("no1: ", ranSource1);
console.log("no2: ", ranSource2);

const img1 = document.querySelector('.img1').setAttribute("src", ranSource1)
// img1.setAttribute('src', './images/dice${randomNumber1}.png')
// alert("hello!")

const img2 = document.querySelector('.img2').setAttribute("src", ranSource2)

if (ran1 > ran2) {
    document.querySelector('h1').innerHTML = "😍Player1 Wins!";
} else if (ran1 < ran2) {
    document.querySelector('h1').innerHTML = "Player2 Wins!🚀";
} else {
    document.querySelector('h1').innerHTML = "Draw!🏝️";
}