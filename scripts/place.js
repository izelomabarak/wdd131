const year = document.querySelector("#year");

const today = new Date();

year.innerHTML = `<span class="highlight">${today.getFullYear()}</span> 🌮 Luis Izelo 🌮 Puebla, México`;

const modified = document.querySelector("#modified");

let lastModified = new Date(document.lastModified);

modified.innerHTML = `Last Modification: <span class="highlight">${new Intl.DateTimeFormat("en-US",{dateStyle: "full"}).format(lastModified)}</span>`;

const windChill = document.querySelector("#windChill");

const temperature = 10;

const wind = 9;

function calculateWindChill(temperatureInput, windInput) {
    if (temperatureInput <= 10 && windInput > 4.8) {
        const windChillCalculator = 13.12 + (0.6215 * temperatureInput) - (11.37 * Math.pow(windInput, 0.16)) + (0.3965 * temperatureInput * Math.pow(windInput, 0.16));
        return windChillCalculator.toFixed(2);
    } else {
    return `N/A`; 
    } 
}

windChill.innerHTML = `Wind Chill: <span class="highlight">${calculateWindChill(temperature, wind)}</span> °C`;