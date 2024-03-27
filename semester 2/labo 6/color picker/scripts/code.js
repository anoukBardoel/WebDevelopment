const setup = () => {
	let sliders = document.getElementsByClassName("slider");
	let save = document.getElementById("save");
	for(let i = 0; i<sliders.length; i++){
		sliders[i].addEventListener("change", update);
	}
	createColor();
	save.addEventListener("click", saveColor)
}

const update = () => {
	let sliders = document.getElementsByClassName("slider");
	let kleur = document.getElementsByClassName("kleur")
	for(let i = 0; i< sliders.length; i++){
		kleur[i].innerHTML = sliders[i].value;
	}
	createColor()
}

const createColor = () =>{
	let sliders = document.getElementsByClassName("slider");
	let colorDemos=document.getElementsByClassName("colorDemo");
	let rood = sliders[0].value;
	let groen = sliders[1].value;
	let blauw = sliders[2].value;
	colorDemos[0].style.backgroundColor= "rgb(" + rood +"," + groen + ","+blauw+")";
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
	div.appendChild(blokje)

	let rood = sliders[0].value;
	let groen = sliders[1].value;
	let blauw = sliders[2].value;
	blokje.style.backgroundColor= "rgb(" + rood +"," + groen + ","+blauw+")";
	knop.addEventListener("click", deleteColor);
	blokje.addEventListener("click", becomeColor);
}
const deleteColor = (event) => {
	let target= event.currentTarget;
	let div = document.getElementById("lijst");
	let blokje = target.parentNode;
	div.removeChild(blokje);
	event.stopPropagation();
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
}

window.addEventListener("load", setup);