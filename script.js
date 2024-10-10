async function getWeather() {
  // URL für Dresden im JSON-Format
  const url = 'https://wttr.in/Dresden?format=j1';
  
  try {
      const response = await fetch(url);
      const data = await response.json();

      // Daten in der Konsole ausgeben, um die Struktur zu prüfen
      console.log(data);

      // Sicherstellen, dass die aktuelle Wetterbedingung vorhanden ist
      if (data.current_condition && data.current_condition[0]) {
          const currentCondition = data.current_condition[0];
          const temp = currentCondition.temp_C; // Temperatur in Celsius

          // Ausgabe in die Konsole
          console.log(`Aktuelle Temperatur: ${temp}°C`);

          // Einfügen in HTML
          document.querySelector('.hauptTemperaturIn').textContent = temp;
      } else {
          console.error("Aktuelle Wetterdaten fehlen oder sind nicht zugänglich.");
      }

      // Sicherstellen, dass die Wettervorhersage vorhanden ist
      if (data.weather && data.weather[0] && data.weather[0].hourly) {
          const weatherIn2h = data.weather[0].hourly[2]?.tempC || 'N/A'; // Temperatur in 2h
          const weatherIn4h = data.weather[0].hourly[4]?.tempC || 'N/A'; // Temperatur in 5h
          const weatherIn6h = data.weather[0].hourly[6]?.tempC || 'N/A'; // Temperatur in 6h

          // Ausgabe in die Konsole
          console.log(`Temperatur in 2 Stunden: ${weatherIn2h}°C`);
          console.log(`Temperatur in 4 Stunden: ${weatherIn4h}°C`);
          console.log(`Temperatur in 6 Stunden: ${weatherIn6h}°C`);

          // Einfügen in HTML
          document.querySelector('.In2h .hauptTemperaturIn').textContent = weatherIn2h;
          document.querySelector('.In4h .hauptTemperaturIn').textContent = weatherIn4h;
          document.querySelector('.In6h .hauptTemperaturIn').textContent = weatherIn6h;
      } else {
          console.error("Vorhersagedaten fehlen oder sind nicht zugänglich.");
      }

  } catch (error) {
      console.error('Fehler beim Abrufen der Wetterdaten:', error);
  }
  console.log(data);
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




