import {FecthUser} from './FecthUser.js';

const input = document.getElementById("name");
const send = document.getElementById("send");
const note = document.querySelector(".note");
const btnAlert = document.getElementById("btn-alert");
const main = document.querySelector("main");
const exit = document.getElementById("exit");
const searchReps = document.getElementById("searchReps");

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


searchReps.addEventListener("click", () => {
    
    const body = document.querySelector("body");
    body.innerHTML = "";
    const load = document.createElement('div');
    load.classList.add("loading");
    load.innerHTML = `
        <div class="loading">
            <div class="circle-loading one"></div>
            <div class="circle-loading two"></div>
            <div class="circle-loading tree"></div>
            <div class="circle-loading four"></div>
        </div>
    `
    body.appendChild(load);

    setInterval(()=>{
        window.location.href = "SearchReps.html";
    },3000);
})