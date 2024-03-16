const setup = () => {
    let tekst = "onoorbaar"
    let stoppen = false;
    let start = 0;
    let stop = 3;
    while(!stoppen){
       if(tekst.substring(start,stop).length < 3){
           stoppen = true;
       }
       else{
           console.log(tekst.substring(start,stop))
           start++;
           stop++;
       }
    }
}

window.addEventListener("load",setup)