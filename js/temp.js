// 2a1d8e4aa92acebd73c271f9eb7c33ee

const API_KEY = `2900083521f73c4a884d282b652cfbbe`

const loadWeather = () => {
    const weatherInput = document.getElementById('input-field');
    const weatherValue = weatherInput.value;
    weatherInput.value = ''
    // console.log(city)
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${weatherValue}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayData(data))
}


const displayData = (tempData) => {
    loadData('city', tempData.name, true)
    loadData('temp', (tempData.main.temp - 273).toFixed(2), true)
    loadData('status', tempData.weather[0].main, true)
    loadData('icon', `https://openweathermap.org/img/wn/${tempData.weather[0].icon}@2x.png`, true)
}

const loadData = (weatherId, value, weatherValue) => {
    if (weatherValue === true) {
        const weatherInput = document.getElementById(weatherId).innerText = value
        return weatherInput
    } else if (weatherValue == false) {
        const weatherInput = document.getElementById(weatherId).src = value
        return weatherInput
    }
}