function render(data) {
   const {
     ip,
     country_code,
     country_name,
     region_code,
     region_name,
     city,
     zip,
     latitude, 
     longitude,
     country_flag
   } = data
 
   const ipField = document.querySelector('.list__item #ip');
   const locationField = document.querySelector('.list__item #location');
   const flagField = document.querySelector('.list__item #flag');
   const coordField = document.querySelector('.list__item #coordinates');
   
   ipField.innerText = ip
   locationField.innerText = `${city}, ${region_code}, ${zip}`;
   flagField.innerHTML = `<img src=${country_flag}>`;
   coordField.innerText = `${latitude}, ${longitude}`;
};

export default render