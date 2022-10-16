window.onload = function (){
    var exit = document.getElementById("exit");
    var start = document.getElementById("start");

    exit.addEventListener('click', (event) => {
        //clear session storage e limpa o histórico de navegação
        console.log('exit click');
        sessionStorage.clear();
        window.location.replace("index.html");
    });

    start.addEventListener('click', (event) =>{
        console.log('Start Click');
        var difficulty = document.querySelector('input[name="difficulty"]:checked').value;
        console.log(difficulty);
        sessionStorage.setItem('difficulty', difficulty);
        window.location.href = "game.html";
    })

    var name = document.getElementById("email");
    name.textContent = sessionStorage.getItem("email");

    setDescription("0");
}


function getValue(radio){
    setDescription(radio.value);
}


function setDescription(value){
    let descriptionText
    switch(value){
        case "0":
            descriptionText = 'Modo sem restrição de tempo e jogadas';
            break;

        case "1":
            descriptionText = 'Modo com restrição de tempo, você tem 3 minutos para concluir';
            break;

        case "2":
            descriptionText = 'Modo com restrição de tempo e jogadas, você tem 1 minuto e 20 jogadas para concluir';
            break;
    }

    var description = document.getElementById("description");
    description.textContent = descriptionText;

}