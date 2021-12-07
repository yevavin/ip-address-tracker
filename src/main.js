import {getLocation} from './service.js'
import {promptBtn, setCompletedRequests} from '../components/prompt.js';

const isValid = (value) => {
  return /^(([1-9]?\d|1\d\d|25[0-5]|2[0-4]\d)\.){3}([1-9]?\d|1\d\d|25[0-5]|2[0-4]\d)$/.test(value);
}

const input = document.querySelector('#input')
const btn = document.getElementById('button')

input.addEventListener('input', () => {
  isValid(input.value) ? btn.removeAttribute('disabled') : btn.setAttribute('disabled', 'disabled')
});

btn.addEventListener('click', () => getLocation(input.value))


window.addEventListener('load', () => getLocation());

// ====== Changing control panel location =========

const controlPanel = document.querySelector(".leaflet-top.leaflet-left")
  ?.removeChild(document.querySelector(".leaflet-top.leaflet-left")?.firstChild);

document.querySelector('.leaflet-bottom.leaflet-left')?.appendChild(controlPanel);

// ====== End of changing control panel location ========

