var main = document.getElementById("main");
var cow = document.getElementById("cow");
var sheep = document.getElementById("sheep");

// identifying the start point of each animal 
cleft = 1;
sleft = 1;
// function for moving the animal to right 
function move(e) {
    if (e.keyCode == 65) {
        cleft += 2;
        cow.style.left = cleft + "vw";
        console.log(cleft);
    }
    if (e.keyCode == 76) {
        sleft += 2;
        sheep.style.left = sleft + "vw";
        console.log(sleft);

    }
    gameOver(e)
}
document.onkeydown = move;
// function for collision detection between animal and finish line 
window.addEventListener("keypress", gameOver);

function gameOver(e) {


    if (e.keyCode == 65 && cleft == 69) {
        window.location.replace('gameovercow.html')
    }
    if (e.keyCode == 76 && sleft == 69) {
        window.location.replace('gameoversheep.html')

    }

}