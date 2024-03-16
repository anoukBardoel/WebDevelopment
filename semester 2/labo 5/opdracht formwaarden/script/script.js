const setup = () => {
    let knop = document.getElementById("button");

    knop.addEventListener("click",opConsole)
}

const opConsole = () => {
    let roker = document.getElementById("roker").checked;
    let nederlands = document.getElementById("nl").checked;
    let frans = document.getElementById("fr").checked;
    let engels = document.getElementById("en").checked;
    let buurlanden = document.getElementById("buurland").options;
    let bestellingen = document.getElementById("bestelling").options;

    if(roker){
        console.log("is een roker");
    }else{
        console.log("is geen roker")
    }

    if(nederlands){
        console.log("moedertaal is nl")
    } else if(frans){
        console.log("moedertaal is fr")
    } else {
        console.log("moedertaal is en")
    }

    console.log("favoriete buurland is " + buurlanden[buurlanden.selectedIndex].text);

    let bestelling = "";
    for(let i = 0; i<bestellingen.length; i++){
        if(bestellingen[i].selected){
            bestelling += bestellingen[i].text + " ";
        }
    }
    console.log("bestelling bestaat uit "+ bestelling.trim());
}

window.addEventListener("load",setup)