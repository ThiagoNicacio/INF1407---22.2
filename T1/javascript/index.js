//  /[a-z]/
const mailformat = /\\[a-z]{1,}[[a-z]{1,}\|[a-z]{1,}(\|[a-z]{1,})*]/;

window.onload = function (){

    var form = document.querySelector('#button');
    form.addEventListener('click', (event) => {
        console.log('submit click')
        if(formIsValid()){
            var email = document.getElementById("emailInput").value
            sessionStorage.setItem('email', email)
            window.location.href = "menu.html"
        } else{
            event.preventDefault();
        }
    });

    document.addEventListener('keypress', () => {
        removeError()
      }, false);

    removeError()
}

function formIsValid(){
    var email = document.getElementById("emailInput");
    var isValid = false;
    if(mailformat.exec(email.value)){
        isValid = true;
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
    var email = document.getElementById("emailInput");
    const parent = email.parentElement;
    parent.classList.remove('error');
    const paragraph = parent.querySelector('p');
    paragraph.textContent = '';
}