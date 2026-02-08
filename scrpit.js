function validate(e){
    e.preventDefault();

    const email = document.getElementById("email").value;
    const pass  = document.getElementById("password").value;
    const age   = document.getElementById("age").value;
    const mgBox = document.getElementById("message");

    let message = '';
    if (email === ''){
        message = 'Please enter an Email';
        mgBox.style.color = 'red';
    }else if (pass === ''){
        message = 'Please enter a password';
        mgBox.style.color = 'red';
    }else if (age === ''){
        message = 'Please enter your age';
        mgBox.style.color = 'red';
    } else {
        message = 'Login succesful'
        mgBox.style.color = 'green'
    }
    mgBox.innerHTML = message;
}
document.getElementById("loginForm").onsubmit = validate;
document.getElementById("email").oninput = () => validate({ preventDefault: () => { } });

document.getElementById("password").oninput = () => validate({ preventDefault: () => { } });

document.getElementById("age").oninput = () => validate({ preventDefault: () => { } });