const year = document.querySelector("#year");

const today = new Date();

year.innerHTML = `<span class="highlight">${today.getFullYear()}</span> 🌮 Luis Izelo 🌮 Puebla, México`;

const modified = document.querySelector("#modified");

let lastModified = new Date(document.lastModified);

modified.innerHTML = `Last Modification: <span class="highlight">${new Intl.DateTimeFormat("en-US",{dateStyle: "full"}).format(lastModified)}</span>`;

const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
});

const tipesnav = document.querySelector('.select')
const secondbutton = document.querySelector('#tipes');

secondbutton.addEventListener('click', () => {
	tipesnav.classList.toggle('show');
	secondbutton.classList.toggle('show');
});

const greenhouses = [
  {
    title: "Plastic low tech",
    tecnology: "Low",
    material: "Plastic",
    imageUrl:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9asgt0PTaD7vUA0m2ht6kmOF6XFbM6ffQVg&s"
  },
  {
    title: "Glass medium tech",
    tecnology: "Medium",
    material: "Glass",
    imageUrl:
    "https://static.wixstatic.com/media/22b2c3_68918ac709224beba10330d81c7156f1~mv2.png/v1/fill/w_925,h_618,al_c,q_90/22b2c3_68918ac709224beba10330d81c7156f1~mv2.png"
  },
  {
    title: "Glass low tech",
    tecnology: "Low",
    material: "Glass",
    imageUrl:
    "https://tmgindustrial.ca/cdn/shop/files/TMG-Industrial-6-x-16-Crystal-Clear-Greenhouse-Aluminum-Frame-Integrated-Gutter-System-Roof-Vents-TMG-GH616-4.jpg?v=1742937371&width=360"
  },
  {
    title: "Plastic high tech",
    tecnology: "High",
    material: "Plastic",
    imageUrl:
    "https://image.made-in-china.com/318f0j00kTAfcydwfPuQ/1%E6%9C%8827%E6%97%A5+%282%29%286%29.mp4.webp"
  },
  {
    title: "Plastic medium tech",
    tecnology: "Medium",
    material: "Plastic",
    imageUrl:
    "https://elblogverde.com/wp-content/uploads/2018/10/ideas-invernadero-casero-tunel-istock-600x399.jpg"
  },
  {
    title: "Glass high tech",
    tecnology: "High",
    material: "Glass",
    imageUrl:
    "https://agfundernews.com/wp-content/uploads/2020/03/Bayer-in-the-greenhouse.jpg"
  }
];

createGreenhouseCart(greenhouses);

const restard = document.querySelector('#restard');
const cristal = document.querySelector('#cristal');
const plastic = document.querySelector('#plastic');
const high = document.querySelector('#high');
const medium = document.querySelector('#medium');
const low = document.querySelector('#low');

restard.addEventListener("click", () => {
  createGreenhouseCart(greenhouses);
});

cristal.addEventListener("click", () => {
  createGreenhouseCart(greenhouses.filter(greenhouse => greenhouse.material == "Glass"));
});

plastic.addEventListener("click", () => {
  createGreenhouseCart(greenhouses.filter(greenhouse => greenhouse.material == "Plastic"));
});

high.addEventListener("click", () => {
  createGreenhouseCart(greenhouses.filter(greenhouse => greenhouse.tecnology == "High"));
});

medium.addEventListener("click", () => {
  createGreenhouseCart(greenhouses.filter(greenhouse => greenhouse.tecnology == "Medium"));
});

low.addEventListener("click", () => {
  createGreenhouseCart(greenhouses.filter(greenhouse => greenhouse.tecnology == "Low"));
});

function createGreenhouseCart(filteredGreenhouses){
  document.querySelector(".pictures").innerHTML = "";
	filteredGreenhouses.forEach(greenhouse => {
		let card = document.createElement("section")
		let name = document.createElement("h3")
		let tech = document.createElement("p")
		let materials = document.createElement("p")
		let image = document.createElement("img")

		name.textContent = greenhouse.title;
		tech.textContent = `Tecnology: ${greenhouse.tecnology}`; 
		materials.textContent = `Material: ${greenhouse.material}`;
		image.setAttribute("src", greenhouse.imageUrl);
		image.setAttribute("alt", `${greenhouse.templeName} Temple`);
		image.setAttribute("loading", "lazy");
    image.setAttribute("width", "400"); 
    image.setAttribute("height", "250");

		card.appendChild(name);
		card.appendChild(tech);
		card.appendChild(materials);
		card.appendChild(image);

    document.querySelector(".pictures").appendChild(card);
	});
}

const visitsDisplay = document.querySelector(".visits");

let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

if (numVisits !== 0) {
    visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first review. 🥳 Welcome!`;
}

numVisits++;

localStorage.setItem("numVisits-ls", numVisits);