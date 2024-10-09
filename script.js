async function getWeather(lat, lon) {
    const apiKey = '88373dba9cd4cd7dafe589e396f1d15f'; // Dein API-Schlüssel
    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&lang=de&appid=${apiKey}`;

    try {
        const response = await fetch(url);
        
        // Überprüfen, ob die API-Antwort erfolgreich ist
        if (!response.ok) {
            throw new Error(`HTTP-Fehler! Status: ${response.status}`);
        }

        const data = await response.json();

        // Debugging - Überprüfen der empfangenen Daten
        console.log(data);

        // Datenverarbeitung wie bisher
        const tempIn2h = data.list[0].main.temp;
        const tempIn5h = data.list[2].main.temp;
        const tempIn9h = data.list[4].main.temp;

        // Daten in HTML-Elemente einfügen
        document.querySelector('.In2h .hauptTemperaturIn').textContent = Math.floor(tempIn2h);
        document.querySelector('.In2h .nebenTemperaturIn').textContent = (tempIn2h % 1).toFixed(1).split('.')[1];

        document.querySelector('.In5h .hauptTemperaturIn').textContent = Math.floor(tempIn5h);
        document.querySelector('.In5h .nebenTemperaturIn').textContent = (tempIn5h % 1).toFixed(1).split('.')[1];

        document.querySelector('.In9h .hauptTemperaturIn').textContent = Math.floor(tempIn9h);
        document.querySelector('.In9h .nebenTemperaturIn').textContent = (tempIn9h % 1).toFixed(1).split('.')[1];
    } catch (error) {
        console.error('Fehler beim Abrufen der Wetterdaten:', error); // Ausgabe des Fehlers in der Konsole
    }
}


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




