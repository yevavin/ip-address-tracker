export const getLocation = async (ip = 'check') => {
   const ip_data = await fetch('https://firestore.googleapis.com/v1/projects/ip-address-tracker-app/databases/(default)/documents/ips/'+ip.replace(/\./g, '_'), {
     method: 'GET',
     contentType: 'application/json',
   })
   .then(response => response.json())
   .then(({fields}) => Object.keys(fields).reduce((accum, key) => {
      accum[key] = fields[key].stringValue
   }, {}))
   .catch(() => null)

    if (ip_data) {
      console.log(ip_data)
    }
    else {
      console.log('error')
    }
 
   // fetch(`http://api.ipstack.com/${ip}?access_key=ad899766ea88a002afc2a584f92bc4e7`)
   //   .then(response => response.json())
   //   .then(data => {
 
       // const data = {"ip": "159.224.55.217", "type": "ipv4", "continent_code": "EU", "continent_name": "Europe", "country_code": "UA", "country_name": "Ukraine", "region_code": "63", "region_name": "Kharkiv", "city": "Derhachi", "zip": "62300", "latitude": 50.110198974609375, "longitude": 36.09349822998047, "location": {"geoname_id": 710098, "capital": "Kyiv", "languages": [{"code": "uk", "name": "Ukrainian", "native": "\u0423\u043a\u0440\u0430\u0457\u043d\u0441\u044c\u043a\u0430"}], "country_flag": "https://assets.ipstack.com/flags/ua.svg", "country_flag_emoji": "\ud83c\uddfa\ud83c\udde6", "country_flag_emoji_unicode": "U+1F1FA U+1F1E6", "calling_code": "380", "is_eu": false}}
 
       // let _data = {
       //   ip: data.ip,
       //   country_code: data.country_code,
       //   country_name: data.country_name,
       //   region_code: data.region_code,
       //   region_name: data.region_name,
       //   city: data.city,
       //   zip: data.zip,
       //   latitude: data.latitude.toString(), 
       //   longitude: data.longitude.toString(),
       //   country_flag: data.location.country_flag
       // }
 
       // _data = Object.keys(_data).reduce((accum, key) => {
       //   accum[key] = {stringValue: _data[key]}
       //   return accum
       // }, {})
 
       // fetch('https://firestore.googleapis.com/v1/projects/ip-address-tracker-app/databases/(default)/documents/ips/'+data.ip.replace(/\./g, '_'), {
       //    method: 'PATCH',
       //    contentType: 'application/json',
       //    body: JSON.stringify({fields: _data})
       //  })
     //   return data
     // })
     // .then(data => {
     //   input.setAttribute('value', data.ip)
     //   setTimeout(()=>render(data))
     //   return data
     // })
     // .then(({latitude, longitude}) =>  {
     //   return  [latitude, longitude]
     // })
     // .then((coords) => {
     //   mymap.setView(coords, 13);
     //   L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
     //     maxZoom: 18,
     //     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
     //       'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
     //     id: 'mapbox/streets-v11',
     //     tileSize: 512,
     //     zoomOffset: -1
     //   }).addTo(mymap);
     //   const marker = L.marker(coords).addTo(mymap);
     //   const markerIcon = document.querySelector('.leaflet-marker-pane .leaflet-marker-icon');
     // })
 } 