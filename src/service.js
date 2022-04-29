import render from "../components/list.js"
import { promptBtn } from "../components/prompt.js"

const mymap = L.map('map');

export const getLocation = async (ip = '') => {

   let ip_data = null;
   if (ip) {
      ip_data = await fetch('https://firestore.googleapis.com/v1/projects/ip-address-tracker-app/databases/(default)/documents/ips/' + ip.replace(/\./g, '_'), {
         method: 'GET',
         contentType: 'application/json',
      })
         .then(response => response.json())
         .then(({ fields }) => Object.keys(fields).reduce((accum, key) => {
            accum[key] = fields[key].stringValue
            return accum
         }, {}))
         .catch(() => null)
   }

   if (!ip_data) {
      ip_data = await fetch(`https://ipwhois.app/json/${ip}`)
         .then(response => response.json())
         .then(data => {
            let _data = {
               "ip": data.ip,
               "continent": data.continent,
               "continent_code": data.continent_code,
               "country": data.country,
               "country_code": data.country_code,
               "country_flag": data.country_flag,
               "country_capital": data.country_capital,
               "country_phone": data.country_phone,
               "country_neighbours": data.country_neighbours,
               "region": data.region,
               "city": data.city,
               "latitude": data.latitude,
               "longitude": data.longitude,
               //"completed_requests": data.completed_requests // !!! UPDATED: doesn't exist anymore
            }
            _data = Object.keys(_data).reduce((accum, key) => {
               accum[key] = { stringValue: _data[key].toString() || '' }
               return accum
            }, {})

            fetch('https://firestore.googleapis.com/v1/projects/ip-address-tracker-app/databases/(default)/documents/ips/' + data.ip.replace(/\./g, '_'), {
               method: 'PATCH',
               contentType: 'application/json',
               body: JSON.stringify({ fields: _data })
            })
            return data
         })

      // setCompletedRequests(ip_data.completed_requests)
   }

   if (ip_data) {
      input.setAttribute('value', ip_data.ip)
      setTimeout(() => render(ip_data))

      const coords = [ip_data.latitude, ip_data.longitude]
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
   }

}