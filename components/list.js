function render(data) {
   const {
    ip,
    continent,
    continent_code,
    country,
    country_code,
    country_flag,
    country_capital,
    country_phone,
    country_neighbours,
    region,
    city,
    latitude,
    longitude,
    completed_requests
 } = data
 
   const ipField = document.querySelector('.list__item #ip');
   const locationField = document.querySelector('.list__item #location');
   const flagField = document.querySelector('.list__item #flag');
   const coordField = document.querySelector('.list__item #coordinates');
   
   ipField.innerText = ip
   locationField.innerText = `${city}, ${region}, ${country_code}`;
   flagField.innerHTML = `<img src=${country_flag}>`;
   coordField.innerText = `${latitude}, ${longitude}`;
};

export default render