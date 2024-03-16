const setup = () => {
    let keuze = document.getElementById("keuze")
    let stoppen = false;
    let array = [];
    while(!stoppen){
        let gemeente = window.prompt("gemeenten");
        if(gemeente !== "stop"){
            array.push(gemeente);
        }
        else{
            stoppen = true;
        }
    }
    array.sort();
    for(let i = 0; i<array.length; i++){
        keuze.innerHTML += "<option value=\"" + array[i]+ "\">"+array[i] + "</option>"
    }
}
window.addEventListener("load",setup)