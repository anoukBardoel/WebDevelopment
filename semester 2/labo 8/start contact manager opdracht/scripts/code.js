let personen = [{
    voornaam: 'Jan',
    familienaam: 'Janssens',
    geboortedatum:'2010-10-10',
    email: 'jan@example.com',
    aantalKinderen: 0
},
    {
        voornaam: 'Mieke',
        familienaam: 'Mickelsen',
        geboortedatum: '1980-01-01',
        email: 'mieke@example.com',
        aantalKinderen: 1
    },
    {
        voornaam: 'Piet',
        familienaam: 'Pieters',
        geboortedatum:'1970-12-31',
        email: 'piet@example.com',
        aantalKinderen: 2
    }];

// Event listener (btnBewaar click)
// Bewaar de wijzigingen die in de user interface werden aangebracht
const bewaarBewerktePersoon = () => {
    console.log("Klik op de knop bewaar");
    let span = document.getElementsByTagName("span");
    let voornaam = document.getElementById("txtVoornaam").value;
    let familienaam = document.getElementById("txtFamilienaam").value;
    let geboortedatum = document.getElementById("txtGeboorteDatum").value;
    let email = document.getElementById("txtEmail").value;
    let aantalKinderen = document.getElementById("txtAantalKinderen").value;
    let lstPersonen = document.getElementById("lstPersonen");
    let allePersonen = lstPersonen.children;
    // valideer alle input data en controleer of er geen errors meer zijn
    valideer();
    let fout;
    let stoppen = false;
    let i= 0;
    while(i<span && !stoppen ){
        if(span[i].getAttribute("class")==="invalid"){
            fout=true;
            stoppen = true;
        }
        i++;
    }
    let bestaat = false;
    let getal = 0;
    while(getal < personen.length && !bestaat){
        let persoon = allePersonen[getal];
        if(persoon.getAttribute("data-gekozen").localeCompare("gekozen")){
            bestaat = true;
        }
        getal++;
    }
    if(!fout && !bestaat){
        let persoon = {};
        persoon.voornaam = voornaam;
        persoon.familienaam = familienaam;
        persoon.geboortedatum = geboortedatum;
        persoon.email = email;
        persoon.aantalKinderen = aantalKinderen;
        personen.push(persoon);
        let option = document.createElement("option");
        lstPersonen.appendChild(option);
        option.innerText = voornaam + " " + familienaam;
        option.addEventListener("click",vulIn);
    } else if(!fout && bestaat){
        let index = lstPersonen.selectedIndex;
        for(let i = 0; i<personen.length; i++){
            let persoon = personen[i];
            if(i === index){
                persoon.voornaam = voornaam;
                persoon.familienaam = familienaam;
                persoon.geboortedatum = geboortedatum;
                persoon.email = email;
                persoon.aantalKinderen = aantalKinderen;
            }
        }
        for(let i = 0; i<allePersonen; i++){
            let persoon = allePersonen[i];
            if(persoon.getAttribute("data-gekozen").localeCompare("gekozen")){
                persoon.setAttribute("data-gekozen", "nietGekozen");
            }
        }
    }
    // indien ok, bewaar de ingegeven data.
        // een nieuw aangemaakte persoon voegen we toe
        // een bestaande persoon in de lijst passen we aan

    // zorg ervoor dat de naam en voornaam ook aangepast en/of zichtbaar zijn in de lijst na updaten

};

// Event listener (btnNieuw click)
const bewerkNieuwePersoon = () => {
    console.log("Klik op de knop nieuw");
    let voornaam = document.getElementById("txtVoornaam");
    let familienaam = document.getElementById("txtFamilienaam");
    let geboortedatum = document.getElementById("txtGeboorteDatum");
    let email = document.getElementById("txtEmail");
    let aantalKinderen = document.getElementById("txtAantalKinderen");
    voornaam.value = "";
    familienaam.value="";
    geboortedatum.value = "";
    email.value = "";
    aantalKinderen.value="";
    // Zet de user interface klaar om de gegevens van een nieuwe persoon in te voeren
};


// onze setup functie die de event listeners registreert
const setup = () => {
    let btnBewaar = document.getElementById("btnBewaar");
    btnBewaar.addEventListener("click", bewaarBewerktePersoon);

    let btnNieuw = document.getElementById("btnNieuw");
    btnNieuw.addEventListener("click", bewerkNieuwePersoon);

    let lstPersonen = document.getElementById("lstPersonen");
    for(let i = 0; i<personen.length; i++){
        persoon = personen[i];
        let option = document.createElement("option");
        lstPersonen.appendChild(option);
        option.setAttribute("id", persoon.voornaam+persoon.familienaam);
        option.innerText = persoon.voornaam + " " + persoon.familienaam;
        option.addEventListener("click",vulIn);
    }
    // voeg een change listener toe aan lstPersonen. Bij het klikken op een option element in de lijst
    // moet de data van die persoon getoond worden in het formulier
};

const vulIn = (event) => {
    let voornaam = document.getElementById("txtVoornaam");
    let familienaam = document.getElementById("txtFamilienaam");
    let geboortedatum = document.getElementById("txtGeboorteDatum");
    let email = document.getElementById("txtEmail");
    let aantalKinderen = document.getElementById("txtAantalKinderen");
    let lstPersonen = document.getElementById("lstPersonen");
    let index = lstPersonen.selectedIndex;
    let option = event.currentTarget;
    option.setAttribute("data-gekozen","gekozen");
    let naam = option.getAttribute("id")
    for(let i = 0; i<personen.length; i++){
        let persoon = personen[i];
        if(i === index){
            voornaam.value = persoon.voornaam;
            familienaam.value = persoon.familienaam;
            geboortedatum.value = persoon.geboortedatum;
            email.value = persoon.email;
            aantalKinderen.value = persoon.aantalKinderen;
        }
    }
}

window.addEventListener("load", setup);