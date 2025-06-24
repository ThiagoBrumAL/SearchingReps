export function FecthUser(input){
    fetch(`https://api.github.com/users/${input}`)
        .then(async res => {
            if(!res.ok){
                throw new Error(res.status);
            }

            const sec2 = document.querySelector(".sec-2"); 

            const exist = document.querySelector(".content-user");
            if(exist){exist.remove()};

            let data = await res.json();


            const contentUser = document.createElement("div");
            contentUser.classList.add("content-user");


            const contentUserTop = document.createElement("div");
            contentUserTop.classList.add("content-user-top");


            const picture = document.createElement("div");
            picture.classList.add("picture");
            picture.style.backgroundImage = `url(${data.avatar_url})`;
            picture.style.backgroundSize = "cover";
            picture.style.backgroundPosition = "center";
            picture.style.backgroundRepeat = "no-repeat";


            const justSpace = document.createElement("div");
            justSpace.id = "just-space";

            
            const containerFollowers = document.createElement("div");
            containerFollowers.classList.add("container-followers");
            containerFollowers.innerHTML = `
                <h4 id="title">Followers</h4>
                <span id="follwers">${data.followers}</span>
            `;


            const containerFollowing = document.createElement("div");
            containerFollowing.classList.add("container-following");
            containerFollowing.innerHTML = `
                <h4 id="title">Following</h4>
                <span id="following">${data.following}</span>
            `;

            justSpace.append(containerFollowers,containerFollowing);
            contentUserTop.append(picture, justSpace);

            const fields = [
                {label:"Name", value:data.name ?? "Not avaliable", className:"name-user"},
                {label:"ID", value:data.id, className:"id-user"},
                {label:"Company", value:data.company ?? "Not avaliable", className:"company-user"},
            ];

            fields.forEach((item) => {
                const wrapper = document.createElement("div");
                wrapper.classList.add("test");

                const label = document.createElement("label");
                label.innerText = item.label;

                const span = document.createElement("span");
                span.classList.add(item.className);
                span.innerText = item.value;

                wrapper.append(label,span);
                contentUser.appendChild(wrapper);
            })

            const btn = document.createElement("button");
            btn.id = "see-perfil";
            btn.innerHTML = `See Perfil &nbsp;<i class="fa-solid fa-magnifying-glass"></i>`;

            btn.addEventListener("click", ()=>{
                window.open(data.url);
            })

            contentUser.prepend(contentUserTop);
            contentUser.append(btn);
            sec2.appendChild(contentUser);
        })
} 