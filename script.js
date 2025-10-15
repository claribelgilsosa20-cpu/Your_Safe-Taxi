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
// Main Description / About Safe Taxi
const mainDescription = `
This is a website to promote the safety and confidence of women and children when boarding a taxi to avoid harassment. 
Our website has a map where users can indicate their location so that a qualified taxi driver for this job can pick them up without any problem. 
Our goal is to restore security, confidence, and well-being to many women and children.

We have a security system with an emergency button, real-time location, audible alerts, and a chat bot with AI trained to solve any doubts and situations. 
It provides safety information and all the settings of this website for your well-being, which is our top priority.
`;

// Additional Features / Information
const additionalFeatures = `
- Real-time location tracking for both passengers and drivers.
- Emergency button for immediate help.
- Direct call buttons for taxi drivers and emergency services.
- Audible alerts for urgent situations.
- Chat bot trained to answer safety-related questions.
- Map showing your exact location and route for safe pick-up.
- First aid instructions in case of emergencies.
`;

// Testimonial Section
const testimonial = `
"Safe Taxi gave me confidence to travel safely. I feel protected knowing I can alert the authorities or my driver in an emergency."
`;

// Mission Statement (to fill later)
const missionStatement = `
[Your mission statement goes here]
`;