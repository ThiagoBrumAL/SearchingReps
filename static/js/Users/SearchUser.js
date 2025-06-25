import {FecthUser} from './FecthUser.js';

const input = document.getElementById("name");
const send = document.getElementById("send");
const note = document.querySelector(".note");
const btnAlert = document.getElementById("btn-alert");
const main = document.querySelector("main");
const exit = document.getElementById("exit");

send.addEventListener("click", ()=>{
    FecthUser(input.value);
})



note.addEventListener("click",showAlert);
btnAlert.addEventListener("click",showAlert);

function showAlert(){
    let myalert = document.querySelector(".alert");
    myalert.classList.toggle("active");
    main.classList.toggle("active");
    input.disabled = !input.disabled;
    send.classList.toggle("active");
}

exit.addEventListener("click", () => {
    const sideBar = document.querySelector(".side-bar");
    sideBar.classList.toggle("active");
})