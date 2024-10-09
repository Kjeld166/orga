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
