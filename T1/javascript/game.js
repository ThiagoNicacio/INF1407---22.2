var startButton = undefined
var stopButton = undefined
var controls = undefined

window.onload = function (){
    var exitGameButton = document.getElementById("exitGame");
    startButton = document.getElementById("start");
    stopButton = document.getElementById("stop");
    controls = document.getElementById("controls");

    exitGameButton.addEventListener('click', () => {
        console.log('exit click');
        sessionStorage.clear();
        window.location.replace("menu.html");
    });

    
    startButton.addEventListener("click", () => {
        console.log('start click');
        
        stopButton.classList.remove("hide");
        controls.classList.add("hide");
        startButton.classList.add("hide");
        exitGameButton.classList.add("hide");

        startGame()
    });
    
    stopButton.addEventListener('click', () => {
        console.log('stop click');

        stopButton.classList.add("hide");
        controls.classList.remove("hide");
        startButton.classList.remove("hide");
        exitGameButton.classList.remove("hide");
    })
}


function startGame(){
    console.log('game start')
}