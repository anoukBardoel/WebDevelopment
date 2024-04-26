const setup = () => {
	let sliders = document.getElementsByClassName("slider");
	let save = document.getElementById("save");
	for(let i = 0; i<sliders.length; i++){
		sliders[i].addEventListener("change", update);
		if(i === 0){
			sliders[i].value = localStorage.getItem("rood");
		} else if(i === 1){
			sliders[i].value = localStorage.getItem("groen");
		} else {
			sliders[i].value = localStorage.getItem("blauw");
		}
	}
	createColor();
	save.addEventListener("click", saveColor);
	let kleuren = JSON.parse(localStorage.getItem("kleuren"));
	for(let i = 0; i<kleuren.length ; i++){
		let kleur = kleuren[i];
		let blokje = document.createElement("div");
		let knop = document.createElement("button");
		knop.innerText = "X";
		blokje.appendChild(knop);
		blokje.setAttribute("class", "colorDemo");
		blokje.setAttribute("data-rood", kleur.rood);
		blokje.setAttribute("data-groen", kleur.groen);
		blokje.setAttribute("data-blauw", kleur.blauw);
		let div = document.getElementById("lijst");
		div.appendChild(blokje)
		blokje.style.backgroundColor= "rgb(" + kleur.rood +"," + kleur.groen + ","+ kleur.blauw+")";
		knop.addEventListener("click", deleteColor);
		blokje.addEventListener("click", becomeColor);
	}
}

const update = () => {
	let sliders = document.getElementsByClassName("slider");
	let kleur = document.getElementsByClassName("kleur")
	for(let i = 0; i< sliders.length; i++){
		kleur[i].innerHTML = sliders[i].value;
	}
	createColor()
	saveSliders();
}

const createColor = () =>{
	let sliders = document.getElementsByClassName("slider");
	let colorDemos=document.getElementsByClassName("colorDemo");
	localStorage.setItem("rood", sliders[0].value);
	localStorage.setItem("groen",sliders[1].value);
	localStorage.setItem("blauw",sliders[2].value);
	colorDemos[0].style.backgroundColor= "rgb(" + localStorage.getItem("rood") +"," + localStorage.getItem("groen") + ","+localStorage.getItem("blauw")+")";
}

const saveColor = () => {
	let blokje = document.createElement("div");
	let knop = document.createElement("button");
	let sliders = document.getElementsByClassName("slider");
	knop.innerText = "X";
	blokje.appendChild(knop);
	blokje.setAttribute("class", "colorDemo");
	blokje.setAttribute("data-rood", sliders[0].value);
	blokje.setAttribute("data-groen", sliders[1].value);
	blokje.setAttribute("data-blauw", sliders[2].value);
	let div = document.getElementById("lijst");
	div.appendChild(blokje);
	let rood = sliders[0].value;
	let groen = sliders[1].value;
	let blauw = sliders[2].value;
	blokje.style.backgroundColor= "rgb(" + rood +"," + groen + ","+ blauw+")";
	knop.addEventListener("click", deleteColor);
	blokje.addEventListener("click", becomeColor);
	overloopGlobal();
	saveSliders();
}
const deleteColor = (event) => {
	let target= event.currentTarget;
	let div = document.getElementById("lijst");
	let blokje = target.parentNode;
	div.removeChild(blokje);
	event.stopPropagation();
	overloopGlobal();
	saveSliders();
}

const becomeColor = (event) => {
	let blokje = event.currentTarget;
	let colorDemos=document.getElementsByClassName("colorDemo");
	let sliders = document.getElementsByClassName("slider");
	let kleur = document.getElementsByClassName("kleur")
	let rood = blokje.getAttribute("data-rood");
	sliders[0].value = rood;
	kleur[0].innerHTML = sliders[0].value;
	let groen = blokje.getAttribute("data-groen");
	sliders[1].value = groen;
	kleur[1].innerHTML = sliders[1].value;
	let blauw = blokje.getAttribute("data-blauw");
	sliders[2].value = blauw;
	kleur[2].innerHTML = sliders[2].value;
	colorDemos[0].style.backgroundColor= "rgb(" + rood +"," + groen + ","+blauw+")";
	saveSliders()
}
const overloopGlobal = () => {
	localStorage.clear();
	let array = [];
	let div = document.getElementById("lijst").children;
	for(let i =0; i<div.length; i++){
		let blok = div[i];
		let kleur = {};
		kleur.rood = blok.getAttribute("data-rood");
		kleur.groen =blok.getAttribute("data-groen");
		kleur.blauw = blok.getAttribute("data-blauw");
		array.push(kleur);
	}
	localStorage.setItem("kleuren",JSON.stringify(array));
}
const saveSliders = () =>{
	let sliders = document.getElementsByClassName("slider");
	localStorage.setItem("rood", sliders[0].value);
	localStorage.setItem("groen",sliders[1].value);
	localStorage.setItem("blauw",sliders[2].value);
}
window.addEventListener("load", setup);