const setup = () => {
// deze code wordt pas uitgevoerd als de pagina volledig is ingeladen
    let pElement=document.getElementById("txtOutput");
    let btn = document.getElementById("btn")

    btn.addEventListener("click", wijzig);
}

const wijzig = ()=>{

    pElement.innerHTML="Welkom!";
}

window.addEventListener("load", setup);