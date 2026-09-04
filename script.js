const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// État des touches actuellement enfoncées.
// Rempli/vidé par les listeners keydown/keyup, jamais modifié ailleurs.
const keyState = {
    ArrowUp: false,
    ArrowDown: false,
    ArrowLeft: false,
    ArrowRight: false
};

const player = {
    x: 30,
    y: 30,
    size: 15,
    speed: 5,
    bgcolor: "rgb(0, 67, 200)",
    draw() {
        ctx.fillStyle = this.bgcolor;
        ctx.fillRect(this.x, this.y, this.size, this.size);
    }
};

function update() {
    if (keyState.ArrowUp) player.y -= player.speed;
    if (keyState.ArrowDown) player.y += player.speed;
    if (keyState.ArrowLeft) player.x -= player.speed;
    if (keyState.ArrowRight) player.x += player.speed;

    // Clamp : on borne x/y aux limites du canvas après le déplacement,
    // plutôt que de "deviner" le dépassement avant de bouger.
    player.x = Math.max(0, Math.min(canvas.width - player.size, player.x));
    player.y = Math.max(0, Math.min(canvas.height - player.size, player.y));
}

function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    player.draw();
}

// Boucle unique, démarrée une seule fois, qui tourne en continu.
// Elle ne dépend jamais du clavier pour démarrer/s'arrêter :
// seul keyState influence ce qu'elle fait à chaque frame.
function gameLoop() {
    update();
    render();
    requestAnimationFrame(gameLoop);
}

document.addEventListener("keydown", (e) => {
    if (e.code in keyState) {
        keyState[e.code] = true;
    }
});

document.addEventListener("keyup", (e) => {
    if (e.code in keyState) {
        keyState[e.code] = false;
    }
});

gameLoop();
