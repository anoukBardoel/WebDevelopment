const setup = () => {
// deze code wordt pas uitgevoerd als de pagina volledig is ingeladen
    let button = document.getElementById("button");
    button.addEventListener("click",berekenPrijs )
}

const berekenPrijs = () =>{
    let prijzen = document.getElementsByClassName("prijs");
    let btw = document.getElementsByClassName("btw");
    let aantallen = document.getElementsByClassName("nummer");
    let totaal = document.getElementById("totaal");
    let subtotaal = document.getElementsByClassName("subtotaal");
    let resultaat = 0;
    for(i = 0; i < subtotaal.length; i++){
        let aantal = parseFloat(aantallen[i].value);
        let prijs = parseFloat(prijzen[i].textContent);
        let btwpercentage = parseFloat(btw[i].textContent);
        subtotaal[i].innerHTML = (aantal * prijs)*(btwpercentage/100)+(aantal*prijs)  + " EUR" ;
        resultaat += parseInt(subtotaal[i].textContent) + " EUR";
    }
    totaal.innerHTML = resultaat;
}
window.addEventListener("load", setup);