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
    bgcolor: "rgb(0, 67, 200)",
    draw(){
        ctx.fillStyle = this.bgcolor
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }

}

 function draw() {
    ctx.fillStyle = "rgb(255 255 255 / 30%)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    player.draw()
    player.x += player.vx;
    player.y += player.vy;

    raf = window.requestAnimationFrame(draw);
 }

canvas.addEventListener("keydown", function(e){
        console.log(e.code, "touche")
        if (e.code == 'ArrowDown') {
           raf = window.requestAnimationFrame(draw);
        }
})

player.draw()