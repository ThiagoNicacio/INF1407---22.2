var startButton = undefined
var stopButton = undefined
var controls = undefined

let cards; 

const items = [
    { name: "batman", image: "src/batman.jpg" },
    { name: "capitao", image: "src/capitao-america.png" },
    { name: "doutor", image: "src/doutor-estranho.jpg" },
    { name: "feiticeira", image: "src/feiticeira-escarlate.jpg" },
    { name: "gamora", image: "src/gamora.jpg" },
    { name: "groot", image: "src/groot.jpg" },
    { name: "homem-aranha", image: "src/homem-aranha.jpg" },
    { name: "homem-ferro", image: "src/homem-de-ferro.png" },
    { name: "hulk", image: "src/hulk.jpg" },
    { name: "mulher-maravilha", image: "src/mulher-maravilha.jpg" },
    { name: "pantera", image: "src/pantera-negra.jpg" },
    { name: "thor", image: "src/thor.png" },
  ];

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
    console.log('game start');

    let cardValues = generateRandomArrayCards();
    console.log(cardValues);
}

const generateRandomArrayCards = (size = 4) => {
    let tArray = [...items];
    let cardValues = [];
    size = (size * size) / 2;
    for (let i = 0; i < size; i++) {
      const randomIndex = Math.floor(Math.random() * tArray.length);
      cardValues.push(tArray[randomIndex]);
      tArray.splice(randomIndex, 1);
    }

    return cardValues;
};

