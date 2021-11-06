
// ====== Changing control panel location =========

const controlPanel = document.querySelector(".leaflet-top.leaflet-left")
  ?.removeChild(document.querySelector(".leaflet-top.leaflet-left")?.firstChild);

document.querySelector('.leaflet-bottom.leaflet-left')?.appendChild(controlPanel);

// ====== End of changing control panel location ========
const mymap = L.map('map')

const getLocation = () => {
  const ip = document.getElementById('input').value
  fetch(`http://api.ipstack.com/${ip}?access_key=ad899766ea88a002afc2a584f92bc4e7`)
  .then(response => response.json())
  .then(({latitude, longitude}) => ([latitude, longitude]))
  .then((coords) => {
    console.log(coords)

    mymap.setView(coords, 13);

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
      maxZoom: 18,
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1
    }).addTo(mymap);

    const marker = L.marker(coords).addTo(mymap);
    const markerIcon = document.querySelector('.leaflet-marker-pane .leaflet-marker-icon');
  })
} 

const btn = document.getElementById('button').addEventListener('click', getLocation);

window.addEventListener('load', getLocation);
