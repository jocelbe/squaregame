const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")

let raf

const keyState = {
    ArrowDown:false,
    ArrowUp:false,
    ArrowLeft:false,
    ArrowRight:false
}

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

 function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    player.draw()
    
        if(keyState.ArrowDown == true){
            player.y += player.vy;

            if (player.y + player.vy > canvas.height - player.radius || player.y + player.vy < player.radius) 
                {
                    player.y -= player.vy;
                }
        }

        if(keyState.ArrowUp == true){
            player.y -= player.vy;

            if (player.y + player.vy > canvas.height - player.radius || player.y + player.vy < player.radius) 
                {
                    player.y += player.vy;
                }
        }

        if(keyState.ArrowLeft == true){
            player.x -= player.vx;

            if (player.x + player.vx > canvas.width - player.radius || player.x + player.vx < player.radius) 
                {
                    player.x += player.vx;
                }
        }

        if(keyState.ArrowRight == true){
            player.x += player.vx;

            if (player.x + player.vx > canvas.width - player.radius || player.x + player.vx < player.radius) 
                {
                    player.x -= player.vx;
                }
        }

    
    raf = window.requestAnimationFrame(draw);
 }

document.addEventListener("keydown", function(e){
        for(const [cle, value] of Object.entries(keyState)){
            if(cle == e.code){
                keyState[e.code] = true
            }else{
                keyState[cle] = false
            }
        }

   raf = window.requestAnimationFrame(draw);
       
})

document.addEventListener("keyup", function(e){
        for(const [cle, value] of Object.entries(keyState)){
            if(cle == e.code){
                keyState[e.code] = false
            }
        }
        window.cancelAnimationFrame(raf);
})

player.draw()