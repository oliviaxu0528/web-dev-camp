// for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
//     document.querySelectorAll(".drum")[i].addEventListener('click', function () {
//         alert("I got clicked!");
//     });
// }

var numberOfDrumButtons = document.querySelectorAll("button").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

    document.querySelectorAll("button")[i].addEventListener("click", function () {
        alert("I got clicked!");

    });

}

