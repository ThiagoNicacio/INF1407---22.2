var canvas;
var ctx;

var Width = 0, Height = 0,transX = 0, transY = 0;

window.onload = function (){
    var exit = document.getElementById("exit");

    exit.addEventListener('click', (event) => {
        //clear session storage e limpa o histórico de navegação
        console.log('exit click')
        sessionStorage.clear()
        window.location.replace("index.html")
    });

    // addEventListener('mousemove', (event) => {
    //     var x = event.clientX;

    //     console.log(x, transX)
    // })

    plot();
}


function plot(){

    canvas = document.getElementById("plotCanvas");

    if (canvas.getContext) {
	    ctx = canvas.getContext("2d");

        canvas.addEventListener('mousemove', (event) => {
            var rect = canvas.getBoundingClientRect();
            var x = event.clientX - transX;
            var y = event.clientY - transY;
            console.log("x: " + x + " y: " + y); 
        })
        
        Width = canvas.width;
        Height = canvas.height;

        transX = Math.abs(Width * 0.5),
        transY = Math.abs(Height * 0.5);

        ctx.clearRect(0,0,Width,Height);
        ctx.translate(transX, transY);
        
        console.log(transX, transY)

        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(2, -10);
        ctx.lineTo(5, 0)
        
        ctx.fillStyle = 'red';
        ctx.stroke()
      }
}
