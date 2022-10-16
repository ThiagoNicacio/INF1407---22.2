var startButton = undefined
var stopButton = undefined
var controls = undefined
var gameContainer = undefined

let cards; 

const items = [
    { name: "batman", image: "src/batman.png" },
    { name: "capitao", image: "src/capitao-america.png" },
    { name: "doutor", image: "src/doutor-estranho.png" },
    { name: "deadpool", image: "src/deadpool.png" },
    { name: "rocket", image: "src/rocket.png" },
    { name: "groot", image: "src/groot.png" },
    { name: "homem-aranha", image: "src/homem-aranha.png" },
    { name: "homem-ferro", image: "src/homem-de-ferro.png" },
    { name: "hulk", image: "src/hulk.png" },
    { name: "mulher-maravilha", image: "src/mulher-maravilha.png" },
    { name: "pantera", image: "src/pantera-negra.png" },
    { name: "thor", image: "src/thor.png" },
  ];

window.onload = function (){
    var exitGameButton = document.getElementById("exitGame");
    startButton = document.getElementById("start");
    stopButton = document.getElementById("stop");
    controls = document.getElementById("controls");
    gameContainer = document.querySelector(".game-container");

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
    matrixGenerator(cardValues);
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

const matrixGenerator = (cardValues, size = 4) => {
    gameContainer.innerHTML = "";
    cardValues = [...cardValues, ...cardValues];
    //simple shuffle
    cardValues.sort(() => Math.random() - 0.5);
    for (let i = 0; i < size * size; i++) {
      
        var cardBefore = document.createElement('div');
        cardBefore.classList.add('card-before');
        cardBefore.appendChild(document.createTextNode('X'))
        //console.log('cardBefore   ', cardBefore);

        var img = document.createElement('img');
        img.src = cardValues[i].image;
        img.classList.add('image');
        //console.log('img   ', img);

        var cardAfter = document.createElement('div');
        cardAfter.classList.add('card-after');
        cardAfter.appendChild(img);
        //console.log('cardAfter   ', cardAfter);

        var cardContainer = document.createElement('div');
        cardContainer.classList.add('card-container');
        cardContainer.setAttribute('data-card-value',cardValues[i].name);
        cardContainer.appendChild(cardBefore);
        cardContainer.appendChild(cardAfter);
        //console.log('cardContainer   ', cardContainer);

        gameContainer.appendChild(cardContainer);
        
    }
    
    gameContainer.style.gridTemplateColumns = `repeat(${size},auto)`;

}