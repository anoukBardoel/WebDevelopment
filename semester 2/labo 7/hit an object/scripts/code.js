let global = {
    IMAGE_COUNT: 5, // aantal figuren
    IMAGE_SIZE: 48, // grootte van de figuur
    IMAGE_PATH_PREFIX: "images/", // map van de figuren
    IMAGE_PATH_SUFFIX: ".png", // extensie van de figuren
    MOVE_DELAY: 3000, // aantal milliseconden voor een nieuwe afbeelding verschijnt
    score: 0, // aantal hits
    timeoutId: 0 // id van de timeout timer, zodat we die kunnen annuleren
};
const setup = () => {
    let button = document.getElementById("knop");
    button.addEventListener("click",play);
};
const play = () => {
    global.timeoutId = setInterval(move, global.MOVE_DELAY);
    let img = document.getElementsByTagName("img")[0];
    img.addEventListener("click", getScore);
    img.addEventListener("click",move );
}
const getScore = (event) => {
    let target = event.currentTarget;
    let afbeelding = target.getAttribute("src").slice(-5, -4);
    let score = document.getElementById("score");
    if(afbeelding !== "0"){
        global.score++;
    } else {
        clearInterval(global.timeoutId);
        window.alert("Game over. score "+global.score);
    }
    score.innerText = global.score;
}
const move = ()=> {
    let veld = document.getElementById("playField");
    let img = document.getElementById("target");

    let maxLinks = veld.clientWidth - img.clientWidth;
    let maxHoogte = veld.clientHeight-img.clientHeight;

    let links = Math.floor(Math.random()*maxLinks);
    let hoogte = Math.floor(Math.random()*maxHoogte);
    img.style.left = links + "px";
    img.style.top = hoogte + "px";
    veranderAfbeelding();
}

const veranderAfbeelding = () => {
    let img = document.getElementById("target");
    let getal = Math.floor(Math.random()*global.IMAGE_COUNT);
    img.setAttribute("src", global.IMAGE_PATH_PREFIX+getal+global.IMAGE_PATH_SUFFIX);
}
window.addEventListener("load", setup);