const api = {
    key: 'baf4808a54023a4c771b974fe958a74a',
    base: 'https://api.openweathermap.org/data/2.5/weather'
}

const updateUI = data => {
    document.getElementById('show_city').innerText = data.name;
    document.getElementById('show_temparature').innerText = data.main.temp;
    document.getElementById('weather_status').innerText = data.weather[0].main;
    document.getElementById('icon').setAttribute('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
    document.getElementById('city').value = "";
}

const getWeatherData = city => {
    fetch(`${api.base}?q=${city}&units=metric&appid=${api.key}`)
    .then(response => response.json())
    .then(data => updateUI(data))
    .catch(data => document.getElementById('show_city').innerText = "404 Not Found")
}

const searchBtn = document.getElementById('search_button');

searchBtn.addEventListener('click', () => {
    const inputCity = document.getElementById('city').value;
    getWeatherData(inputCity)
})

// By Default Location
getWeatherData("Chicago")