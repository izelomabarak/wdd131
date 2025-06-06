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

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    year: 2005,
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    year: 1888,
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    year: 2015,
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    year: 2020,
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    year: 1974,
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    year: 1986,
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    year: 1983,
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Abidjan Ivory Coast Temple",
    location: "Abidjan, Cote d'Ivoire",
    year: 2025,
    dedicated: "2025, May, 25",
    area: 17362,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/abidjan-ivory-coast-temple/abidjan-ivory-coast-temple-59729-thumb.jpg"
  },
  {
    templeName: "Asunción Paraguay Temple",
    location: "Asunción, Paraguay",
    year: 2019,
    dedicated: "2019, November, 3",
    area: 11906,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/asuncion-paraguay-temple/asuncion-paraguay-temple-6969-main.jpg"
  },
  {
    templeName: "Kinshasa Democratic Republic of the Congo Temple",
    location: "Kinshasa, Democratic Republic of the Congo",
    year: 2019,
    dedicated: "2019, April, 14",
    area: 12000,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/kinshasa-democratic-republic-of-the-congo-temple/kinshasa-democratic-republic-of-the-congo-temple-3533-main.jpg"
  }
];

createTempleCart(temples);

const home = document.querySelector('#home');
const old = document.querySelector('#old');
const newest = document.querySelector('#new');
const large = document.querySelector('#large');
const small = document.querySelector('#small');

home.addEventListener("click", () => {
  createTempleCart(temples);
});

old.addEventListener("click", () => {
  createTempleCart(temples.filter(temple => temple.year < 1900));
});

newest.addEventListener("click", () => {
  createTempleCart(temples.filter(temple => temple.year > 2000));
});

large.addEventListener("click", () => {
  createTempleCart(temples.filter(temple => temple.area > 90000));
});

small.addEventListener("click", () => {
  createTempleCart(temples.filter(temple => temple.area < 10000));
});

function createTempleCart(filteredTemples){
  document.querySelector(".pictures").innerHTML = "";
	filteredTemples.forEach(temple => {
		let card = document.createElement("section")
		let name = document.createElement("h3")
		let location = document.createElement("p")
		let dedicated = document.createElement("p")
		let area = document.createElement("p")
		let image = document.createElement("img")

		name.textContent = temple.templeName;
		location.textContent = `Location: ${temple.location}`; 
		dedicated.textContent = `Dedicated: ${temple.dedicated}`;
		area.textContent = `Size: ${temple.area} sq ft`;
		image.setAttribute("src", temple.imageUrl);
		image.setAttribute("alt", `${temple.templeName} Temple`);
		image.setAttribute("loading", "lazy");
    image.setAttribute("width", "400"); 
    image.setAttribute("height", "250");

		card.appendChild(name);
		card.appendChild(location);
		card.appendChild(dedicated);
		card.appendChild(area);
		card.appendChild(image);

    document.querySelector(".pictures").appendChild(card);
	});
}