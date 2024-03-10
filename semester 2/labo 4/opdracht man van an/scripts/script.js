const setup = () => {
    let tekst = document.getElementById("tekst").innerText.toLowerCase();
    let antwoord = document.getElementById("antwoord");

    //met indexOf
    // let aantal = 0;
    // let index = 0;
    // let stoppen = false;
    // let i = 0;
    // while(!stoppen && i<tekst.length){
    //     if(tekst.indexOf("an", index) !== -1){
    //         index = tekst.indexOf("an", index)+2;
    //         aantal++;
    //     }
    //     else
    //     {
    //         stoppen = true;
    //     }
    //     i++;
    // }
    // antwoord.innerText = aantal;

    //met lastIndexOf
    let aantal = 0;
    let index = 0;
    let stoppen = false;
    let i = 0;
    while(!stoppen && i<tekst.length){
        if(tekst.lastIndexOf("an", index) !== -1){
            aantal = tekst.lastIndexOf("an", index);
            aantal++;
        }
        else
        {
            stoppen = true;
        }
        i++;
    }
    antwoord.innerText = aantal;
}

window.addEventListener("load",setup)

