import {fetchReps} from './FecthReps.js'

const hidden = document.querySelector(".hidden");
const input = document.getElementById("name");
const sec2 = document.querySelector(".sec-2");
const send = document.getElementById("send");
const note = document.querySelector(".note");
const main = document.querySelector("main");
const btnAlert = document.getElementById("btn-alert");
const exit = document.getElementById("exit");

send.addEventListener("click", ()=>[
    fetchReps(input, hidden, sec2, moDe, createBtn)
])

input.addEventListener("keydown", (e) => {
    if(e.key === 'Enter' ){
        send.click();
    }
})

function moDe(event){
    const mode = event.currentTarget;
    const currentIcon = mode.querySelector("i");
    const isSun = currentIcon.classList.contains("fa-moon");
    
    mode.innerHTML = "";

    const i = document.createElement("i");
    i.classList.add("fa-solid");

    i.classList.add("fa-solid",isSun ? "fa-sun":"fa-moon")

    const card = document.querySelectorAll(".card");
    const title = document.querySelectorAll("#title-rep");
    const titleLang = document.querySelectorAll("#title-lang");
    const date = document.querySelectorAll("#date");
    const url = document.querySelectorAll("#url");

    card.forEach((item) => {item.classList.toggle("active")});
    title.forEach((item) => {item.classList.toggle("active")});
    titleLang.forEach((item) => {item.classList.toggle("active")});
    date.forEach((item) => {item.classList.toggle("active")});
    url.forEach((item) => {item.classList.toggle("active")});
    mode.appendChild(i);
}

function createBtn(){
    const btn = document.createElement("button");
    const icon = document.createElement("i");
    icon.classList.add("fa-solid","fa-sun");
    btn.appendChild(icon);
    btn.classList.add("mode");
    btn.addEventListener("click", moDe);
    document.querySelector(".sec-1").appendChild(btn);
}


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