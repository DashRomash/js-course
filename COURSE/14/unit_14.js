//key  b28e938fe926b887562426062e17a6de;
// moy https://api.openweathermap.org/data/2.5/weather?id=524925&appid=b28e938fe926b887562426062e17a6de
const options = [
    { value: "485763", text: 'Sverdlovskiy' },
    { value: "562319", text: 'Fryazino' },
    { value: "571557", text: 'Bronnitsy' },
    { value: "547523", text: 'Klin' },
    { value: "499099", text: 'Samara' }
]

const selectElement = document.createElement('select');
selectElement.id = 'city';

options.forEach(option => {
    const optionElement = document.createElement('option');
    optionElement.value = option.value;
    optionElement.textContent = option.text;
    selectElement.appendChild(optionElement);
});

document.querySelector('.select').appendChild(selectElement);


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
    //http://openweathermap.org/img/wn/04n@2x.png
    document.querySelector('.icon').innerHTML = `<img src="http://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
    document.querySelector('.wind-direction').innerHTML = data.wind.deg + '&deg;';
    document.querySelector('.wind-speed').textContent = data.wind.speed + ' м/с';
    document.querySelector('.pressure').textContent = data.main.pressure + ' мм р.ст.';
}
getWeather();
document.querySelector('#city').onchange = getWeather;