const setup = () => {
let button = document.getElementById("knop");
let input = document.getElementById("input");
    button.addEventListener("click", () =>spaties(input));
}

const spaties = (inputtext)=> {
    let tekst = inputtext.value;
    let antwoord = "";
    for(let i = 0; i < tekst.length; i++){
        let teken = tekst.charAt(i);
        if(teken !== " "){
            antwoord += teken + " ";
        }
    }
    console.log(antwoord)
}
window.addEventListener("load",setup);