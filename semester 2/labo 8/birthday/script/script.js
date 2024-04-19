const setup = () => {
    let leeftijd = document.getElementById("leeftijd");

    let geboorte = new Date(2004,6,8);
    let nu = new Date();
    let aantalJaar = nu.getFullYear() - geboorte.getFullYear();
    let verjaardag = new Date(2024,6,8);
    let aantalDagen = Math.round((verjaardag - nu)/86400000);
    let vorigeVerjaardag = new Date(2023,6,8);
    let dagen = Math.round((nu-vorigeVerjaardag )/86400000);

    leeftijd.innerText = "Binnen " + aantalDagen + " dagen word ik "+aantalJaar+ ". Mijn vorige verjaardag was " + dagen + " dagen geleden.";
}
window.addEventListener("load",setup);