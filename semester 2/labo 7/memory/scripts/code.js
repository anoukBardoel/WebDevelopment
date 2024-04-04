let global ={
    AANTAL_HORIZONTAAL:4,
    AANTAL_VERTICAAL:3,
    AANTAL_KAARTEN:6
}
const setup = () => {
    zetKlaar();

}
const zetKlaar = () => {
    let div = document.getElementById("playField");
    let afbeeldingen = ["afbeelding1","afbeelding1","afbeelding2","afbeelding2","afbeelding3","afbeelding3","afbeelding4","afbeelding4",
        "afbeelding5","afbeelding5","afbeelding6","afbeelding6"];
    for(let i = 1; i<=(global.AANTAL_KAARTEN*2); i++) {
        let img = document.createElement("img");
        let achterkant = document.createElement("img")
        let nummer = Math.round(Math.random() * afbeeldingen.length - 1);
        let afbeelding = afbeeldingen[nummer];
        if (afbeeldingen.length === 1 || ("undefined".localeCompare(afbeelding) === 0)) {
            afbeelding = afbeeldingen[0];
            nummer = 0;
        }
        img.setAttribute("src", "./images/" + afbeelding + ".png");
        achterkant.setAttribute("src", "./images/achterkant.png");
        achterkant.setAttribute("data-nummer", i);
        achterkant.setAttribute("data-nummer", i);
        img.style.display = "none";
        div.appendChild(achterkant);
        div.appendChild(img);
        afbeeldingen.splice(nummer, 1);
        achterkant.addEventListener("click",achterkantDraaiOm );
        img.addEventListener("click",voorkantDraaiOm)
    }
}
const achterkantDraaiOm = (event) => {
    let achterkant = event.currentTarget;
    let afbeelding = achterkant.nextSibling;
    afbeelding.style.display = "inline";
    achterkant.style.display = "none";
}
const voorkantDraaiOm = (event) => {
    let afbeelding = event.currentTarget;
    let achterkant = afbeelding.previousSibling;
    achterkant.style.display = "inline";
    afbeelding.style.display = "none";
}

window.addEventListener("load",setup)