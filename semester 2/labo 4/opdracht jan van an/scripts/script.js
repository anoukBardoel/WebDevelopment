const setup = () => {
    let input = document.getElementById("tekst");
    let tekst = input.innerHTML;
    let button = document.getElementById("button");
    button.addEventListener("click", bereken(tekst))
}

const bereken = (tekst) => {
    let antwoord = document.getElementById("antwoord");
    antwoord.innerHTML = tekst;
    return 3
}
window.addEventListener("load",setup)