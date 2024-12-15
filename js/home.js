let logOut = document.querySelector("#logOut");
let GoToLog = document.querySelector("#GoToLog");

logOut.addEventListener("click", function () {
    GoToLog.setAttribute("href", "login.html")
})
let newData = JSON.parse(localStorage.getItem("newData"));

let DataOnBaseTest = JSON.parse(localStorage.getItem("Data"));

for (let i = 0; i < DataOnBaseTest.length; i++) {
    console.log(DataOnBaseTest[i].emailInputLog)
    if (newData[0].loginInput === DataOnBaseTest[i].emailInputLog) {
        welcomeMsg.innerHTML = `<h1 class="">Welcome ${DataOnBaseTest[i].nameInputLog.toUpperCase()}</h1>`;
    }
}