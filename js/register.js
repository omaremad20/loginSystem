/*Global*/
let
    nameInputLogRegex = /^[A-Za-z]{3,10}$/
    , emailInputLogRegex = /^[a-zA-z0-9]{1,15}(@gmail.com)$/
    , passwordInputLogRegex = /^\w{8,32}$/
    , nameInputLog = document.querySelector("#nameInputLog")
    , emailInputLog = document.querySelector("#emailInputLog")
    , passwordInputLog = document.querySelector("#passwordInputLog")
    , saveDataBtn = document.querySelector("#saveDataBtn")
    , arrayAllDataUser = []
    , successMsg = document.querySelector("#successMsg")
    , nameIsToken = document.querySelector("#nameIsToken")
    , alertMsgName = document.querySelector("#alertMsgName")
    , alertMsgEmail = document.querySelector("#alertMsgEmail")
    , alertMsgPassword = document.querySelector("#alertMsgPassword")
    , showPassword = document.querySelector("#showPassword")
    , requiredInputs = document.querySelector("#requiredInputs");
/*Start*/
if (localStorage.getItem("Data")) {
    arrayAllDataUser = JSON.parse(localStorage.getItem("Data"));
}
/*Events*/
let isExsit = false;
emailInputLog.addEventListener("input", function () {
    isExsit = false;
    for (let i = 0; i < arrayAllDataUser.length; i++) {
        if (arrayAllDataUser[i].emailInputLog === emailInputLog.value) {
            nameIsToken.classList.remove("d-none");
            isExsit = true;
            break;
        } else {
            nameIsToken.classList.add("d-none");

        }
    }
    return isExsit;
});

let nameValid = false;
nameInputLog.addEventListener("blur", function () {
    nameValid = false;
    if (nameInputLogRegex.test(nameInputLog.value) === true) {
        alertMsgName.classList.add("d-none");
        nameValid = true;
    } else {
        alertMsgName.classList.remove("d-none");
        nameValid = false;
    }
    return nameValid;
});

let emailValid = false;
emailInputLog.addEventListener("blur", function () {
    emailValid = false;
    if (emailInputLogRegex.test(emailInputLog.value) === true) {
        alertMsgEmail.classList.add("d-none");
        emailValid = true;
    } else {
        alertMsgEmail.classList.remove("d-none");
        emailValid = false;
    }
    return emailValid;
});

let passwordValid = false;
passwordInputLog.addEventListener("blur", function () {
    passwordValid = false;
    if (passwordInputLogRegex.test(passwordInputLog.value) === true) {
        alertMsgPassword.classList.add("d-none");
        passwordValid = true;
    } else {
        alertMsgPassword.classList.remove("d-none");
        passwordValid = false;
    }
    return passwordValid;
});

showPassword.addEventListener("click", function () {
    if (passwordInputLog.getAttribute("type") === "password") {
        passwordInputLog.setAttribute("type", "text");
        showPassword.classList.replace("fa-eye-slash", "fa-eye");
    } else {
        passwordInputLog.setAttribute("type", "password");
        showPassword.classList.replace("fa-eye", "fa-eye-slash");
    }
});
/*Functions*/
let nullInputs = false;
function required() {
    nullInputs = false;
    if (nameInputLog.value === "" && emailInputLog.value === "" && passwordInputLog.value === "") {

        nullInputs = true;
    } else {

        nullInputs = false;
    }
    return nullInputs;
}
function clearInputs() {
    nameInputLog.value = null;
    emailInputLog.value = null;
    passwordInputLog.value = null;
};
/*MainEvent*/
saveDataBtn.addEventListener("click", function () {
    if (isExsit === false & nameValid === true & emailValid === true & passwordValid === true & nullInputs === false) {
        let objData = {
            nameInputLog: nameInputLog.value,
            emailInputLog: emailInputLog.value,
            passwordInputLog: passwordInputLog.value
        }
        arrayAllDataUser.push(objData);
        localStorage.setItem("Data", JSON.stringify(arrayAllDataUser));
        clearInputs();
        requiredInputs.classList.add("d-none");
        successMsg.classList.remove("d-none");
        setTimeout(() => {
            successMsg.classList.add("d-none");
        }
            , 5000);
    } else {
        requiredInputs.classList.remove("d-none");
    }
});