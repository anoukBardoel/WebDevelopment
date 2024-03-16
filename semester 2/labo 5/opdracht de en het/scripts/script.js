const setup = () => {
    let tekst = "Gisteren zat de jongen op de stoep en at de helft van de appel";
    let index = 0;

    let stoppen = false;
    while(!stoppen){
        if(tekst.indexOf("de",0) !== -1){
            if(tekst.indexOf("De",0) !== -1){
                index = tekst.indexOf("De", 0);
                tekst= tekst.substring(0,index) + "het " + tekst.substring(index + 3);
            }
            else {
                index = tekst.indexOf("de", 0);
                tekst= tekst.substring(0,index) + "het " + tekst.substring(index + 3);
            }
        }
        else
        {
            stoppen=true;
        }
    }
    console.log(tekst);
}

window.addEventListener("load",setup)