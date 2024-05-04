let global = {
    codes : ["/g","/y","/t","/i"],
    url:["https://www.google.com/search?q=","https://www.youtube.com/results?search_query=","https://twitter.com/hashtag/","https://www.instagram.com/explore/tags/"],
    fullNames: ["google","youtube", "twitter","instagram"]
}
const setup = () => {
    let knop = document.getElementById("knop");
    knop.addEventListener("click", goToWebsite)

}
const goToWebsite = () =>{
    let zoekopdracht = document.getElementById("zoekopdracht").value;
    valideerInput(zoekopdracht);
    let gevonden = false;
    let i = 0;
    while( i<global.codes.length && !gevonden){
        if(zoekopdracht.substring(0,2) === global.codes[i]){
            window.open( global.url[i] + zoekopdracht.substring(3));
            zetInHistory(i);
            onthoud();
            gevonden = true;
        }
        i++
    }

}
const valideerInput = (input) =>{
    let code = input.substring(0,2);
    if(!code.startsWith("/")){
        window.alert("Invalid command")
    }
    let gevonden = false;
    let i = 0
    while( i<global.codes.length && !gevonden){
        if(code === global.codes[i]){
            gevonden = true;
        }
        i++
    }
    if(gevonden === false){
        window.alert("Unkown command prefix")
    }
}
const zetInHistory = (i) => {
    let zoekopdracht = document.getElementById("zoekopdracht").value;
    let history = document.getElementById("history");

    let card = document.createElement("div");
    card.setAttribute("class",global.fullNames[i]+" card col");

    let body = document.createElement("div");
    body.setAttribute("class","card-body");

    let title = document.createElement("h5");
    title.setAttribute("class","class-title");
    title.setAttribute("data-title",global.fullNames[i]);
    title.innerText = global.fullNames[i];

    let text = document.createElement("p");
    text.setAttribute("class", "card-text");
    text.setAttribute("data-text", zoekopdracht.substring(3));
    text.innerText = zoekopdracht.substring(3);

    let button = document.createElement("button");
    button.setAttribute("class","btn btn-primary");
    button.setAttribute("data-url", global.url[i] + zoekopdracht.substring(3));
    button.addEventListener("click",buttonGaNaar(button.getAttribute("data-url")));
    button.innerText = "GO!";

    body.appendChild(title);
    body.appendChild(text);
    body.appendChild(button);
    card.appendChild(body);
    history.appendChild(card);
}
const buttonGaNaar = (i,zoekopdracht) => {
    window.open( zoekopdracht );
}
const onthoud = () =>{

    localStorage.clear();
    let array = [];
    let div = document.getElementById("history").children;
    for(let i =0; i<div.length; i++){
        let card = div[i].children[i];
        let history = {
            title: card.children[0].getAttribute("data-title"),
            text: card.children[1].getAttribute("data-text"),
            url: card.children[2].getAttribute("data-url")
        };
        console.log(card.children[0].getAttribute("data-title"));
        console.log(card.children[1].getAttribute("data-text"));
        console.log(card.children[2].getAttribute("data-url"));
        array.push(history);
    }
    localStorage.setItem("history",JSON.stringify(array));
}
const zetTerug = () => {
    let h = JSON.parse(localStorage.getItem("history"));
    let history = document.getElementById("history");
    for(let i = 0; i<h.length ; i++){
        let blokje = h[i];

        let card = document.createElement("div");
        card.setAttribute("class",blokje.title +" card col");

        let body = document.createElement("div");
        body.setAttribute("class","card-body");

        let title = document.createElement("h5");
        title.setAttribute("class","class-title");
        title.innerText = blokje.title;

        let text = document.createElement("p");
        text.setAttribute("class", "card-text");
        text.innerText = blokje.text;

        let button = document.createElement("button");
        button.setAttribute("class","btn btn-primary");
        button.setAttribute("data-url", blokje.url)
        button.innerText = "GO!";

        body.appendChild(title);
        body.appendChild(text);
        body.appendChild(button);
        card.appendChild(body);
        history.appendChild(card);
    }
}
window.addEventListener("load",setup);