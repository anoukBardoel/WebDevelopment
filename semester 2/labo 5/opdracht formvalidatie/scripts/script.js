const setup = () => {
    let button = document.getElementById("button");

    button.addEventListener("click", valideer)
}

const valideer = ()=>{
    if(valideerVoornaam()&&valideerFamilienaam()&& valideerDatum() && valideerEmail() && valideerKinderen()){
        window.alert("proficiat!");
    }

}

const valideerVoornaam = () => {
    let voornaam = document.getElementById("voornaam").value;
    let fout = document.getElementById("foutVoornaam");
    let kader = document.getElementsByClassName("input")[0];

    if(voornaam.length === 0){
        fout.innerText = "dit veld mag niet leeg zijn";
        kader.className = "input fout";
        return false;
    } else if(voornaam.length > 30){
        fout.innerText = "max. 30 karakters";
        kader.className = "fout";
        return  false;
    } else {
        return true;
    }
}
const valideerFamilienaam = () => {
    let familienaam = document.getElementById("familienaam").value;
    let fout = document.getElementById("foutFamilienaam");
    let kader = document.getElementsByClassName("input")[1];

    if(familienaam.length === 0){
        fout.innerText = "Dit veld mag niet niet leeg zijn";
        kader.className = "input fout";
        return false
    } else if(familienaam.length >50){
        fout.innerText = "max. 50 karakters";
        kader.className = "input fout";
        return false;
    } else{
        return true;
    }
}

const  valideerDatum = () => {
    let geboortedatum = document.getElementById("geboortedatum").value.split("-");
    let fout = document.getElementById("foutGeboortedatum");
    let kader = document.getElementsByClassName("input")[2];

    if(geboortedatum[0].length === 0){
        fout.innerText = "Dit veld mag niet leeg zijn";
        kader.className = "input fout";
        return false;
    } else if(geboortedatum[0].length === 4 && geboortedatum[1].length === 2 && geboortedatum[2].length === 2){
        return  true;
    } else{
        fout.innerText = "Geboortedatum moet van het formaat jjjj-mm-dd zijn";
        kader.className ="input fout"
        return false;
    }
}

const valideerEmail = () => {
    let email = document.getElementById("email").value;
    let fout = document.getElementById("foutEmail");
    let kader = document.getElementsByClassName("input")[3];

    if(email.length === 0){
        fout.innerText = "Dit veld mag niet leeg zijn";
        kader.className = "input fout";
        return false;
    } else if(!email.contains("@")){
        fout.innerText = "geen geldig email adres";
        kader.className = "input fout";
        return false;
    } else{
        return true;
    }
}

const valideerKinderen = () => {
    let kinderen = document.getElementById("kinderen").value;
    let fout = document.getElementById("foutKinderen");
    let kader = document.getElementsByClassName("input")[4];

    if(kinderen.length === 0){
        fout.innerText = "Dit veld mag niet leeg zijn";
        kader.className = "input fout";
        return false;
    } else if(!isGetal(kinderen)){
        fout.innerText = "Dit veld moet een nummer zijn";
        kader.className = "input fout";
        return false;
    } else if(kinderen < 0){
        fout.innerText = "is geen positief getal";
        kader.className = "input fout";
        return false;
    } else if(kinderen > 99){
        fout.innerText = "Dit veld mag niet leeg zijn";
        kader.className = "input fout";
        return false;
    }else {
        return true;
    }
}


const isGetal = (tekst) => {
    return !isNaN(tekst);
}

window.addEventListener("load", setup);