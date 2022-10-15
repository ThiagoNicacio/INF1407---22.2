window.onload = function (){
    var exit = document.getElementById("exit");

    exit.addEventListener('click', (event) => {
        //clear session storage e limpa o histórico de navegação
        console.log('exit click')
        sessionStorage.clear()
        window.location.replace("index.html")
    });

    

}