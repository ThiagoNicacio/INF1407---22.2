var startButton = undefined;
var stopButton = undefined;
var controls = undefined;
var gameContainer = undefined;
var exitGameButton = undefined;
var moves = undefined;
var timeValue = undefined;
var result = undefined;
let interval;

let cards; 
let firstCard = false;
let secondCard = false;

let movesCount = 0,
    winCount = 0,
    seconds = 0,
    minutes = 0;

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
    exitGameButton = document.getElementById("exitGame");
    startButton = document.getElementById("start");
    stopButton = document.getElementById("stop");
    controls = document.getElementById("controls");
    gameContainer = document.querySelector(".game-container");
    moves = document.getElementById("moves-count");
    timeValue = document.getElementById("time");
    result = document.getElementById("result");

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
        startGame();
    });
    
    stopButton.addEventListener('click', () => {
        console.log('stop click');
        stopGame();
    })
}

function startGame(){
    console.log('game start');
    result.innerText = "";

    movesCount = 0;
    seconds = 0;
    minutes = 0;
    winCount = 0;

    let cardValues = generateRandomArrayCards();
    console.log(cardValues);
    matrixGenerator(cardValues);
    interval = setInterval(timeGenerator, 1000);
    setTimer();
    setMoves();
}

function stopGame(){
    gameContainer.innerHTML = "";
    stopButton.classList.add("hide");
    controls.classList.remove("hide");
    startButton.classList.remove("hide");
    exitGameButton.classList.remove("hide");
    clearInterval(interval);
}

function movesCounter () {
    movesCount += 1;
    moves.innerHTML = "";
    moves.appendChild(document.createTextNode(`Jogadas: ${movesCount}`));
};

function setMoves(){
    moves.innerHTML = "";
    moves.appendChild(document.createTextNode(`Jogadas: ${movesCount}`));
}

const timeGenerator = () => {
    seconds += 1;
    if (seconds >= 60) {
      minutes += 1;
      seconds = 0;
    }
    setTimer();
};

function getTimeValue(){
    let secondsValue = seconds < 10 ? `0${seconds}` : seconds;
    let minutesValue = minutes < 10 ? `0${minutes}` : minutes;
    return `Tempo: ${minutesValue}:${secondsValue}`
}

function setTimer(){
    timeValue.innerHTML = "";
    timeValue.appendChild(document.createTextNode(getTimeValue()));
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

    cards = document.querySelectorAll(".card-container");
    cards.forEach((card) => {
        card.addEventListener("click", () => {
            if (!card.classList.contains("matched")) {
                card.classList.add("flipped");

                if (!firstCard) {
                    firstCard = card;
                    firstCardValue = card.getAttribute("data-card-value");
                } else {
                    movesCounter();
                    secondCard = card;
                    let secondCardValue = card.getAttribute("data-card-value");
                    if (firstCardValue == secondCardValue) {
                        firstCard.classList.add("matched");
                        secondCard.classList.add("matched");
                        firstCard = false;
                        winCount += 1;
                        if (winCount == Math.floor(cardValues.length / 2)) {
                            result.innerHTML = ""

                            var yourWin = document.createElement('h2');
                            yourWin.appendChild(document.createTextNode('Você venceu'));
                            result.appendChild(yourWin);

                            var moves = document.createElement('h2');
                            moves.appendChild(document.createTextNode('Com ' + movesCount + ' jogadas'))
                            result.appendChild(moves);

                            var time = document.createElement('h2');
                            time.appendChild(document.createTextNode(getTimeValue()))
                            result.appendChild(time);

                            stopGame();
                        }
                    } else {
                        let [tempFirst, tempSecond] = [firstCard, secondCard];
                        firstCard = false;
                        secondCard = false;
                        let delay = setTimeout(() => {
                        tempFirst.classList.remove("flipped");
                        tempSecond.classList.remove("flipped");
                        }, 1000);
                    }
                }
            }
        });
    });
}