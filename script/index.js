var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
// Latitude, Longitude
L.marker([41.311081, 69.240562]).addTo(map)
    .bindPopup('Tashkent')
    .openPopup();