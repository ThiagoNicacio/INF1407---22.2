window.onload = load;

function load(){
    var exit = document.getElementById("exit");
    var start = document.getElementById("btnMenu")

    exit.addEventListener('click', (event) => {
        //clear session storage e limpa o histórico de navegação
        console.log('exit click')
        sessionStorage.clear()
        window.location.replace("index.html")
    });

    start.addEventListener('click', (event) =>{
        console.log('Start Click')
        var difficulty = document.querySelector('input[name="difficulty"]:checked').value;
        console.log(difficulty)
        sessionStorage.setItem('difficulty', difficulty)
        window.location.href = "game.html"
    })

    var name = document.getElementById("email");
    name.textContent = sessionStorage.getItem("email")
}