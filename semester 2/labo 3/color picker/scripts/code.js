const setup = () => {
	let colorDemos=document.getElementsByClassName("colorDemo");
	let sliders = document.getElementsByClassName("slider");
	// we moeten zowel op het input als het change event reageren,
	// zie http://stackoverflow.com/questions/18544890
	sliders[0].addEventListener("change", updateR);
	sliders[0].addEventListener("input", updateR);
	sliders[1].addEventListener("change", updateG);
	sliders[1].addEventListener("input", updateG);
	sliders[2].addEventListener("change", updateB);
	sliders[2].addEventListener("input", updateB);

	sliders[0].addEventListener("change", createColor);
	sliders[1].addEventListener("change", createColor);
	sliders[2].addEventListener("change", createColor);
	colorDemos[0].style.backgroundColor= createColor();
}

const updateR = () => {
	let sliders = document.getElementsByClassName("slider");
	let rood = document.getElementById("rood");
	rood.innerHTML = sliders[0].value;
}
const updateG = () => {
	let sliders = document.getElementsByClassName("slider");
	let groen = document.getElementById("groen");
	groen.innerHTML = sliders[1].value;
}
const updateB = () => {
	let sliders = document.getElementsByClassName("slider");
	let blauw = document.getElementById("blauw");
	blauw.innerHTML = sliders[2].value;
}

const createColor = () =>{
	let sliders = document.getElementsByClassName("slider");
	let colorDemos=document.getElementsByClassName("colorDemo");
	let rood = sliders[0].value;
	let groen = sliders[1].value;
	let blauw = sliders[2].value;
	colorDemos[0].style.backgroundColor= "rgb(" + rood +"," + groen + ","+blauw+")";
}
// dit is de eerste regel code die uitgevoerd wordt,
// de bovenstaande functie declaraties introduceren
// enkel de functies en voeren ze niet uit natuurlijk.
//
// Onderstaande zorgt ervoor dat de setup functie wordt
// uitgevoerd zodra de DOM-tree klaar is.
window.addEventListener("load", setup);