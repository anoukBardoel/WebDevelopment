const setup = () => {
    let element = document.createElement("p");
    let tekst = document.createTextNode("dit is een tekstje!");
    let div = document.getElementById("myDIV");
    element.appendChild(tekst);
    div.appendChild(element);
}

window.addEventListener("load", setup)