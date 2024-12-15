/*Global*/
let
    btnLogin = document.querySelector("#btnLogin")
    , loginInput = document.querySelector("#loginInput")
    , inputPassword = document.querySelector("#inputPassword")
    , emailIncorrect = document.querySelector("#emailIncorrect")
    , passIncorrect = document.querySelector("#passIncorrect")
    , goToHome = document.querySelector("#goToHome")
    , requiredInputs = document.querySelector("#requiredInputs")
    , notFoundMsg = document.querySelector("#notFoundMsg")
    , welcomeMsg = document.querySelector("#welcomeMsg")
    , arrForShow = [];
/*Events*/
goToHome.addEventListener("click", function () {
    let objdata = {
        loginInput: loginInput.value,
        inputPassword: inputPassword.value,
    }
    arrForShow.push(objdata);
    localStorage.setItem("newData", JSON.stringify(arrForShow));
    console.log(arrForShow);
    if (loginInput.value === "" || inputPassword.value === "") {
        requiredInputs.classList.remove("d-none");
    } else {
        requiredInputs.classList.add("d-none");
        notFoundMsg.classList.add("d-none")
        if (localStorage.getItem("Data")) {
            let dataFromDataBase = JSON.parse(localStorage.getItem("Data"));
            for (let i = 0; i < dataFromDataBase.length; i++) {
                if (dataFromDataBase[i].emailInputLog === loginInput.value && dataFromDataBase[i].passwordInputLog === inputPassword.value) {
                    emailIncorrect.classList.add("d-none");
                    passIncorrect.classList.add("d-none");
                    goToHome.setAttribute("href", "home.html");
                } else if (dataFromDataBase[i].emailInputLog !== loginInput.value && dataFromDataBase[i].passwordInputLog === inputPassword.value) {
                    emailIncorrect.classList.remove("d-none");
                } else if (dataFromDataBase[i].emailInputLog === loginInput.value && dataFromDataBase[i].passwordInputLog !== inputPassword.value) {
                    passIncorrect.classList.remove("d-none");
                } else if (dataFromDataBase[i].emailInputLog !== loginInput.value && dataFromDataBase[i].passwordInputLog !== inputPassword.value) {
                    notFoundMsg.classList.remove("d-none");
                }
            }
        } else if (localStorage.getItem("Data") === null) {
            notFoundMsg.classList.remove("d-none")
        }
    }

});

showPassword.addEventListener("click", function () {
    if (inputPassword.getAttribute("type") === "password") {
        inputPassword.setAttribute("type", "text");
        showPassword.classList.replace("fa-eye-slash", "fa-eye");
    } else {
        inputPassword.setAttribute("type", "password");
        showPassword.classList.replace("fa-eye", "fa-eye-slash");
    }
})