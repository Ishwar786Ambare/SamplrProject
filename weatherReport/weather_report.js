function showweatherDetails(event) {
    event.preventDefault();
}

const city = document.getElementById('city').value;
console.log('city-->',city);

const apiKey = 'c4f86ece00bc8aa272652ac9065af12d'; // Replace 'YOUR_API_KEY' with your actual API key
// const apiKey = '3489ea3f1e11b1b77a5290c4752f5182'; // Replace 'YOUR_API_KEY' with your actual API key
// const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fdb53d0e4e0ac1797f51be7296d7d3ca&units=metric`;


fetch(apiUrl)
.then(response => response.json())
.then(data => {
    console.log('data-->',data);
  const weatherInfo = document.getElementById('weatherInfo');
  weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                        //   <p>Temperature: ${data.main.temp} &#8451;</p>
                          <p>Weather: ${data.weather[0].description}</p>`;
})

document.getElementById('weatherForm').addEventListener('submit',showweatherDetails );