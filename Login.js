const togglePassword = document.querySelector("#togglePassword");
const passwor = document.querySelector("#id_password");

togglePassword.addEventListener("click", function (e) {
    const type =
        passwor.getAttribute("type") === "password" ? "text" : "password";
    passwor.setAttribute("type", type);

    this.classList.toggle("fa-eye-slash");
});

document.getElementById("btn").addEventListener("click", signIN);
var regdUsers = JSON.parse(localStorage.getItem("userDatabase")) || [];
function signIN() {
    var email = document.querySelector("#email").value;
    var password = document.querySelector("#id_password").value;

    var flag = true;
    if (email === "Niku" && password === "0000") {
        window.location.href = "moviesUpload.html";
    } else {
        for (var i = 0; i < regdUsers.length; i++) {
            if (regdUsers[i].emailAdd == email && regdUsers[i].pass == password) {
                // console.log("registered user");

                flag = false;
                break;
            }
        }
        if (flag == true) {
            swal("Oops!", "invalid Credentials!", "error");
        } else {
            swal("Good Job!", "You Sucess to Log in", "success");
            setTimeout(function () {
                window.location.href = "index.html";
                window.clearTimeout(tID); // clear time out.
            }, 1000);
        }
    }
}