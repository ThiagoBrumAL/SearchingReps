const hidden = document.querySelector(".hidden");
const input = document.getElementById("name");
const sec2 = document.querySelector(".sec-2");
const statusRep = {
    false:"public",
    true:"private"
}
const colorsLang = {
    JavaScript: "oklch(90.5% 0.182 98.111)",
    HTML: "oklch(64.5% 0.246 16.439)",
    CSS: "oklch(67.3% 0.182 276.935)",
    Rust: "oklch(27.4% 0.006 286.033)",
    Python: "oklch(48.8% 0.243 264.376)",
    Java: "oklch(51.4% 0.222 16.935)",
    Ruby: "oklch(45.5% 0.188 13.697)",
    Default: "oklch(70.4% 0.04 256.788)"
}

const send = document.getElementById("send");

input.addEventListener("keydown", (e) => {
    if(e.key === 'Enter' ){
        send.click();
    }
})

function getApi(){

    hidden.innerHTML = "";
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
    sec2.appendChild(load);
    fetch(`https://api.github.com/users/${input.value}/repos?per_page=200`)
        .then(async res => {
            if(!res.ok){
                load.innerHTML = "";
                throw new Error(res.status);
            }

            load.innerHTML = "";
            hidden.innerHTML = "";
            let data = await res.json();
            data.reverse().forEach(item => {

                if(!item.private){
                    const card = document.createElement("div");
                    const status = statusRep[item.private]

                    card.classList.add("card");
                    card.innerHTML = `
                    <div class="card-manipulation">
                        <div class="first">
                            <h4 id="title-rep">${item.name}</h4>
                            <span id="status" style="color: oklch(72.3% 0.219 149.579);"><i class="fa-solid fa-lock-open"></i>&nbsp;&nbsp;${status}</span>
                        </div>
                        <span id="date">${Intl.DateTimeFormat("PT-BR").format(new Date(item.created_at))}</span>
                    </div>
                    <div class="card-manipulation">
                        <a href="${item.html_url}" target="_blank" id="url">
                            <span>${item.html_url}</span>
                        </a>
                        <div class="content-language">
                            <div class="circle"></div>
                            <h5 id="title-lang">${item.language ?? "Undefined"}</h5>
                        </div>
                    </div>
                    `
                    const circle = card.querySelector(".circle");
                    const lang = colorsLang[item.language] || colorsLang.Default;
                    circle.style.backgroundColor = lang;
                    hidden.appendChild(card);

                    if(!document.querySelector(".mode")){
                        const btn = document.createElement("button");
                        const icon = document.createElement("i");

                        btn.classList.add("mode")
                        icon.classList.add("fa-solid","fa-sun");
                        btn.appendChild(icon);
                        document.querySelector(".sec-1").appendChild(btn);
                        btn.addEventListener("click",moDe);
                    }
                }else{
                    const card = document.createElement("div");
                    const status = statusRep[item.private]

                    card.classList.add("card");
                    card.innerHTML = `
                    <div class="card-manipulation">
                        <div class="first">
                            <h4 id="title-rep">${item.name}</h4>
                            <span id="status">&nbsp;&nbsp;${status}</span>
                        </div>
                        <span id="date">${Intl.DateTimeFormat("PT-BR").format(new Date(item.created_at))}</span>
                    </div>
                    <div class="card-manipulation">
                        <span id="url">${item.html_url}</span>
                        <div class="content-language">
                            <div class="circle"></div>
                            <h4 id="title-lang">${item.language ?? "Undefined"}</h4>
                        </div>
                    </div>
                    `

                    const circle = card.querySelector(".circle");
                    const lang = colorsLang[item.language] || colorsLang.Default;
                    circle.style.backgroundColor = lang;

                    hidden.appendChild(card);

                    if(!document.querySelector(".mode")){
                        const btn = document.createElement("button");
                        const icon = document.createElement("i");

                        icon.classList.add("fa-solid","fa-sun");
                        btn.appendChild(icon);
                        btn.classList.add("mode");
                        btn.addEventListener("click", moDe);
                        document.querySelector(".sec-1").appendChild(btn);
                    }
                }
            });
        })
}
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

const note = document.querySelector(".note");
const main = document.querySelector("main");
const btnAlert = document.getElementById("btn-alert");

note.addEventListener("click", ()=>{
    showAlert();
})
btnAlert.addEventListener("click", ()=>{
    showAlert();
})

function showAlert(){
    let myalert = document.querySelector(".alert");
    myalert.classList.toggle("active");
    main.classList.toggle("active");
    input.disabled = !input.disabled;
    send.classList.toggle("active");
}