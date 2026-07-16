function checkPassword(){

    let password = document.getElementById("password").value;

    let score = 0;

    // Length
    if(password.length >= 8){
        score++;
    }

    // Uppercase
    if(/[A-Z]/.test(password)){
        score++;
    }

    // Lowercase
    if(/[a-z]/.test(password)){
        score++;
    }

    // Number
    if(/[0-9]/.test(password)){
        score++;
    }

    // Special Character
    if(/[!@#$%^&*(),.?":{}|<>]/.test(password)){
        score++;
    }

    let result = document.getElementById("result");

    if(score <= 2){
        result.innerHTML = "Weak Password🔴";
        result.style.color = "red";
    }
    else if(score <= 4){
        result.innerHTML = "Medium Password⚠️";
        result.style.color = "orange";
    }
    else{
        result.innerHTML = "Strong Password🟢";
        result.style.color = "green";
    }

}

function showPassword(){

    let password = document.getElementById("password");

    if(password.type == "password"){
        password.type = "text";
    }
    else{
        password.type = "password";
    }

}


