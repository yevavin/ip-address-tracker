import render from '../components/list.js'
import {getLocation} from './service.js'

const input = document.querySelector('#input')
const btn = document.getElementById('button')

const isValid = (value) => {
  return /^(([1-9]?\d|1\d\d|25[0-5]|2[0-4]\d)\.){3}([1-9]?\d|1\d\d|25[0-5]|2[0-4]\d)$/.test(value);
}

input.addEventListener('change', () => {
  isValid(input.value)
     ? btn.addEventListener('click', () => getLocation(input.value))
     : btn.setAttribute('disabled', 'disabled');
 });

const mymap = L.map('map');



//window.addEventListener('load', () => getLocation());
