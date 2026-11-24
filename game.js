game.js
const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

let score = 0;

const ball = {
    x: 400,
    y: 400,
    r: 12
};

const keeper = {
    x: 350,
    y: 70,
    w: 100,
    h: 20
};

canvas.addEventListener("click", shoot);

function shoot(e){

    const rect = canvas.getBoundingClientRect();

    const shotX = e.clientX - rect.left;

    if(
        shotX > keeper.x &&
        shotX < keeper.x + keeper.w
    ){
        alert("🧤 GERED!");
    }
    else{
        score++;
        alert("⚽ GOAL!");
    }

    keeper.x = Math.random() * 700;
}

function 
