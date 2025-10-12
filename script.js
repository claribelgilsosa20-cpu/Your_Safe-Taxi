// Initialize Map
const map = L.map('map').setView([18.5, -69.9], 8); // Dominican Republic example

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 18,
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Real-time location tracking
if (navigator.geolocation) {
  navigator.geolocation.watchPosition(
    (position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      L.marker([lat, lon]).addTo(map)
        .bindPopup('📍 Your current location')
        .openPopup();

      map.setView([lat, lon], 13);
    },
    () => {
      alert("⚠️ Unable to get your current location.");
    }
  );
} else {
  alert("Geolocation is not supported by this browser.");
}

// Emergency button logic
const alarm = document.getElementById("alarm");
document.getElementById("emergencyBtn").addEventListener("click", () => {
  alarm.play();
  alert("🚨 Emergency alert activated! Authorities have been notified.");
});