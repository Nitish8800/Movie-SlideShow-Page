const togglePassword = document.querySelector('#togglePassword');
const passwor = document.querySelector('#id_password');

togglePassword.addEventListener('click', function (e) {

    const type = passwor.getAttribute('type') === 'password' ? 'text' : 'password';
    passwor.setAttribute('type', type);

    this.classList.toggle('fa-eye-slash');
});




document.querySelector("button").addEventListener("click", signUp);
var userData = JSON.parse(localStorage.getItem("userDatabase")) || [];
function signUp() {
    var email = document.querySelector("#email").value;
    var password = document.querySelector("#id_password").value;
    var user = document.querySelector("#user").value;
    var mobile = document.querySelector("#mobile").value;

    var userCred = {
        emailAdd: email,
        pass: password,
        userName: user,
        mobile: mobile,
    };


    if (email == "" || password == "" || user == "" || mobile == "") {
        alert("invalid Details!");

    } else {
        userData.push(userCred);
        localStorage.setItem("userDatabase", JSON.stringify(userData));

        window.location.href = "logIn.html";
    }

}

document.querySelector("#logInPage").addEventListener("click", function () {
    window.location.href = "logIn.html";
});

