window.onload = load;

const mailformat = /(.+)@(.+).(.+)/;

function load(){

    var form = document.querySelector('#login-form');
    form.addEventListener('submit', (event) => {
        console.log('submit click')
        if(formIsValid()){
            form.submit();
        } else{
            event.preventDefault();
        }
    });

    document.addEventListener('keypress', (event) => {
        removeError()
      }, false);

    removeError()
}

function formIsValid(){
    var email = document.getElementById("email");
    var isValid = false;
    if(mailformat.exec(email.value)){
        isValid = true
        window.location.href = "menu.html";
    }
    else{
        setError(email, 'Email Inválido!')
    }
    return isValid
}

function setError(element, errorMessage) {
    const parent = element.parentElement;
    parent.classList.add('error');
    const paragraph = parent.querySelector('p');
    paragraph.textContent = errorMessage;
}

function removeError(){
    var email = document.getElementById("email");
    const parent = email.parentElement;
    parent.classList.remove('error');
    const paragraph = parent.querySelector('p');
    paragraph.textContent = '';
}