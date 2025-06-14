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

const visitsDisplay = document.querySelector(".visits");

let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

if (numVisits !== 0) {
    visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first review. 🥳 Welcome!`;
}

numVisits++;

localStorage.setItem("numVisits-ls", numVisits);