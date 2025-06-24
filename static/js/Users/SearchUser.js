import {FecthUser} from './FecthUser.js';

const input = document.getElementById("name");
const send = document.getElementById("send");

send.addEventListener("click", ()=>{
    FecthUser(input.value);
})