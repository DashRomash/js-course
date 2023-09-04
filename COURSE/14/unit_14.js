//key  b28e938fe926b887562426062e17a6de;
// moy https://api.openweathermap.org/data/2.5/weather?id=524925&appid=b28e938fe926b887562426062e17a6de

const param = {
    'url': 'https://api.openweathermap.org/data/2.5/',
    'appid': 'b28e938fe926b887562426062e17a6de'
}


function getWeather() {
    const cityID = document.querySelector('#city').value;
    fetch(`${param.url}weather?id=${cityID}&units=metric&appid=${param.appid}`)
        .then(weather => {
            return weather.json();
        }).then(showWeather);

}
function showWeather(data) {
    console.log(data);
    document.querySelector('.city-name').textContent = data.name;
    document.querySelector('.temperature').innerHTML = Math.round(data.main.temp) + '&deg;';
    document.querySelector('.sky-details').textContent = data.weather[0]['description'];
}
getWeather();
document.querySelector('#city').onchange = getWeather;