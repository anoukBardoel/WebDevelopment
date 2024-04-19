const setup = () => {
    console.log(JSON.stringify(student));
    console.log(student2.voornaam);
}
let student = {
    voornaam: "Anouk",
    familienaam: "Bardoel",
    studentnummer: "0930211",
    klas: "1TIc",
    mannelijk: false,
    aantalVakken: 10
}
let student2 = JSON.parse('{"voornaam":"Anouk","familienaam":"Bardoel","studentnummer":"0930211","klas":"1TIc","mannelijk":false,"aantalVakken":10}');


window.addEventListener("load",setup);