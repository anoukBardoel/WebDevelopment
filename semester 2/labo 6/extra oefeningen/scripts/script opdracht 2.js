const setup = () => {
    let items = document.getElementsByTagName("li")

    for(let i = 0; i < items.length; i++){
        items[i].setAttribute("class","listitem");
    }

    let foto = document.createElement("img");
    let body = document.getElementsByTagName("body")[0];
    foto.setAttribute("src","../images/profielfoto.png" );
    body.appendChild(foto);

}

window.addEventListener("load", setup)