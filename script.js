const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")

let raf

const player = {
    x:30,
    y:30,
    vx:5,
    vy:5,
    width:15,
    height:15,
    radius: 5,
    bgcolor: "rgb(0, 67, 200)",
    draw(){
        ctx.fillStyle = this.bgcolor
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }

}

 function drawDown() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    player.draw()
    player.y += player.vy;

    if (player.y + player.vy > canvas.height - player.radius || player.y + player.vy < player.radius) 
        {
            player.y -= player.vy;
        }

    raf = window.requestAnimationFrame(drawDown);
 }

 function drawUp() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    player.draw()
    player.y -= player.vy;

    if (player.y + player.vy > canvas.height - player.radius || player.y + player.vy < player.radius) 
        {
            player.y += player.vy;
        }

    raf = window.requestAnimationFrame(drawUp);
 }

 function drawRight() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    player.draw()
    player.x += player.vx;

    if (player.x + player.vx > canvas.width - player.radius || player.x + player.vx < player.radius) 
        {
            player.x -= player.vx;
        }

    raf = window.requestAnimationFrame(drawRight);
 }

 function drawLeft() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    player.draw()
    player.x -= player.vx;

    if (player.x + player.vx > canvas.width - player.radius || player.x + player.vx < player.radius) 
        {
            player.x += player.vx;
        }

    raf = window.requestAnimationFrame(drawLeft);
 }

document.addEventListener("keydown", function(e){
        console.log(e.code, "touche")
        if (e.code == 'ArrowDown') {
           raf = window.requestAnimationFrame(drawDown);
        }
        if (e.code == 'ArrowUp'){
           raf = window.requestAnimationFrame(drawUp);
        }
        if (e.code == 'ArrowRight'){
           raf = window.requestAnimationFrame(drawRight);
        }
        if (e.code == 'ArrowLeft'){
           raf = window.requestAnimationFrame(drawLeft);
        }
})

document.addEventListener("keyup", function(e){
        window.cancelAnimationFrame(raf);
})

player.draw()