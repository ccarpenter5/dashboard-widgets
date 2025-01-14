// API key. Replace with your API key
const APIKEY = '4566e879fa06c08d441c5de71a0b579e';
// City
const city = 'Forks';
// Units for Farenheit
const units = 'imperial';

// URL query string
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=${units}`;

// Using fetch to get data
fetch(url)
.then( response => response.json() )
.then( data => {

  // Check-check: Is data good? 
  console.log( data );
  
  // Get Container for Weather   
  const weatherContainer = document.querySelector('.weather');
  
  // Template to output
  const template = `
  <h2>🌧️</h2>
    <h1>Weather</h1>
    <h4><data value="${data.name}" class="city">${data.name}</data></h4>
    <data value="${data.main.temp}" class="temp">${data.main.temp}&#8457;</data>
    
  <p>rain:
    <data value="${data.main.rain}" class="p">${data.main.humidity}</data>%</p>
  `;
  
  
  // Insert dynamic template to container
  weatherContainer.insertAdjacentHTML("afterbegin", template);
  
});




