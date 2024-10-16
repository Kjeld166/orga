// API-URL für Dresden
const apiKey = '88373dba9cd4cd7dafe589e396f1d15f'; // Ersetze DEIN_API_KEY mit deinem OpenWeather API-Schlüssel
const city = 'Dresden';
const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

async function getWeather() {
  try {
    const response = await fetch(url);
    const data = await response.json();

    // Daten in der Konsole ausgeben, um die Struktur zu prüfen
    console.log(data);

    // Sicherstellen, dass die aktuellen Wetterbedingungen vorhanden sind
    if (data.cod === "200") {
      // Aktuelle Wetterdaten
      const currentWeather = data.list[0]; // Aktuelle Wetterdaten (1. Eintrag in der Liste)
      const temp = currentWeather.main.temp; // Temperatur in Celsius
      const tempDecimal = (temp % 1).toFixed(1).substring(1); // .2 für Dezimalstelle
      const iconCode = currentWeather.weather[0].icon; // Icon-Code für das aktuelle Wetter

      // Ausgabe in die Konsole
      console.log(`Aktuelle Temperatur: ${temp}°C`);

      // Einfügen in HTML
      document.querySelector('.hauptTemperaturIn').textContent = Math.floor(temp); // Ganzzahlige Temperatur
      document.querySelector('.nebenTemperaturIn').textContent = tempDecimal; // Dezimalstelle

      // Icon einfügen
      const weatherIconUrl = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
      document.querySelector('.In2h .wetterIcon').src = weatherIconUrl;

      // Wettervorhersage in 2, 4 und 6 Stunden
      const weatherIn2h = data.list[1]?.main.temp || 'N/A'; // Temperatur in 2 Stunden
      const weatherIn4h = data.list[2]?.main.temp || 'N/A'; // Temperatur in 4 Stunden
      const weatherIn6h = data.list[3]?.main.temp || 'N/A'; // Temperatur in 6 Stunden

      const icon2h = data.list[1]?.weather[0].icon || ''; // Icon-Code für Wetter in 2 Stunden
      const icon4h = data.list[2]?.weather[0].icon || ''; // Icon-Code für Wetter in 4 Stunden
      const icon6h = data.list[3]?.weather[0].icon || ''; // Icon-Code für Wetter in 6 Stunden

      // Ausgabe in die Konsole
      console.log(`Temperatur in 2 Stunden: ${weatherIn2h}°C`);
      console.log(`Temperatur in 4 Stunden: ${weatherIn4h}°C`);
      console.log(`Temperatur in 6 Stunden: ${weatherIn6h}°C`);

      // Einfügen in HTML für 2h, 4h und 6h
      document.querySelector('.In2h .hauptTemperaturIn').textContent = Math.floor(weatherIn2h);
      document.querySelector('.In2h .nebenTemperaturIn').textContent = (weatherIn2h % 1).toFixed(1).substring(1); // .2 für Dezimalstelle
      document.querySelector('.In2h .wetterIcon').src = `http://openweathermap.org/img/wn/${icon2h}@2x.png`;

      document.querySelector('.In4h .hauptTemperaturIn').textContent = Math.floor(weatherIn4h);
      document.querySelector('.In4h .nebenTemperaturIn').textContent = (weatherIn4h % 1).toFixed(1).substring(1); // .2 für Dezimalstelle
      document.querySelector('.In4h .wetterIcon').src = `http://openweathermap.org/img/wn/${icon4h}@2x.png`;

      document.querySelector('.In6h .hauptTemperaturIn').textContent = Math.floor(weatherIn6h);
      document.querySelector('.In6h .nebenTemperaturIn').textContent = (weatherIn6h % 1).toFixed(1).substring(1); // .2 für Dezimalstelle
      document.querySelector('.In6h .wetterIcon').src = `http://openweathermap.org/img/wn/${icon6h}@2x.png`;
    } else {
      console.error("Fehler beim Abrufen der Wetterdaten:", data.message);
    }
  } catch (error) {
    console.error('Fehler beim Abrufen der Wetterdaten:', error);
  }
}

getWeather();






// Wetter beim Laden der Seite abrufen
window.onload = function() {
  getWeather();
};


console.log('JavaScript wird geladen');


window.onload = function() {
    const latitude = 51.1657;
    const longitude = 10.4515;

    getWeather(latitude, longitude);
};


// Beispielkoordinaten für Deutschland
window.onload = function() {
    const latitude = 51.1657;
    const longitude = 10.4515;

    getWeather(latitude, longitude);
};


// Koordinaten für die Wetterdaten (Beispiel: 51.1657 N, 10.4515 E für Deutschland)
window.onload = function() {
    const latitude = 51.1657;
    const longitude = 10.4515;

    // Wetterdaten für die nächste Stunde abrufen und aktualisieren
    getWeather(latitude, longitude);
};





function updateUhrzeit() {
    const now = new Date();
    let stunden = now.getHours().toString().padStart(2, '0');
    let minuten = now.getMinutes().toString().padStart(2, '0');
    let sekunden = now.getSeconds().toString().padStart(2, '0');
   
    // Uhrzeit in das HTML-Element einfügen
    document.getElementById('uhrzeit').innerHTML = `
      <span class="stunden">${stunden}</span><span class="doppelpunkte">:</span>
      <span class="minuten">${minuten}</span><span class="doppelpunkte">:</span>
      <span class="sekunden">${sekunden}</span>
    `;
   }
   
   function updateDatum() {
    const now = new Date();
    let tag = now.getDate().toString().padStart(2, '0');
    let monat = (now.getMonth() + 1).toString().padStart(2, '0');
    let wochenTag = now.toLocaleDateString('de-DE', { weekday: 'short' });
   
    document.querySelector('.Datum').innerHTML = `${tag}.${monat}.`;
    let options = { weekday: 'short' };
    let wochentagLang = now.toLocaleDateString('de-DE', options).slice(0, 3);
    document.querySelector('.Tag').textContent = `${wochentagLang}.`;
   }
   
   updateUhrzeit();
   updateDatum();
   setInterval(() => {
    updateUhrzeit();
    updateDatum();
   }, 500);
   
   async function getSunTimes(lat, lon) {
    const response = await fetch(`https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lon}&formatted=0`);
    const data = await response.json();
    
    const sunrise = new Date(data.results.sunrise).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const sunset = new Date(data.results.sunset).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
   
    document.querySelector('.sonnenaufgang').textContent = `${sunrise} Uhr`;
    document.querySelector('.sonnenuntergang').textContent = `${sunset} Uhr`;
   }
   
   // Koordinaten (Beispiel: 51.1657 N, 10.4515 E für Deutschland)
   window.onload = function() {
    const latitude = 51.1657;
    const longitude = 10.4515;
    getSunTimes(latitude, longitude);
   };
   
   
   function toggleWeatherInfo() {
    const wetterInfo = document.querySelector('.wetter-info');
    wetterInfo.style.display = wetterInfo.style.display === 'none' ? 'block' : 'none';
   }



   let currentDiv = 1; // Initialisierung

document.getElementById('toggleBtn').addEventListener('click', function() {
  if (currentDiv === 1) {
    document.getElementById('divInfo1').classList.add('hidden');
    document.getElementById('divInfo2').classList.remove('hidden');
    currentDiv = 2;
  } else {
    document.getElementById('divInfo1').classList.remove('hidden');
    document.getElementById('divInfo2').classList.add('hidden');
    currentDiv = 1;
  }
});




