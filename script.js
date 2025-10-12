// ===== Create Map =====
const map = L.map('map').setView([0,0], 2);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 18,
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

const alarm = document.getElementById('alarm');

// ===== Taxi Icon =====
const taxiIcon = L.icon({
  iconUrl: 'assets/taxi.png',
  iconSize: [40, 40]
});

// ===== Real-Time Location =====
function trackLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.watchPosition((position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      if (window.currentMarker) map.removeLayer(window.currentMarker);

      window.currentMarker = L.marker([lat, lon], {icon: taxiIcon})
        .addTo(map)
        .bindPopup("Your taxi location 🚖").openPopup();

      map.setView([lat, lon], 14);
    }, (err) => {
      console.error("Geolocation error:", err);
    });
  } else {
    alert("Geolocation is not supported by your browser.");
  }
}

trackLocation();

// ===== Emergency Button =====
document.getElementById("emergency").addEventListener("click", () => {
  alert("🚨 Calling emergency services...");
  alarm.play();
});

// ===== Call Taxi Button =====
document.getElementById("callTaxi").addEventListener("click", () => {
  alert("📞 Calling nearest taxi...");
  alarm.play();
});

// ===== Example Route to Client =====
function showRoute(lat, lon, clientLat, clientLon) {
  const clientMarker = L.marker([clientLat, clientLon]).addTo(map)
    .bindPopup("Client").openPopup();

  const route = L.polyline([[lat, lon], [clientLat, clientLon]], {color: 'blue'}).addTo(map);
  map.fitBounds(route.getBounds());
}

// Example usage (replace with real coordinates):
// showRoute(19.4326, -99.1332, 19.4340, -99.1350);