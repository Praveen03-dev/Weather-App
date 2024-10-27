let image = document.querySelector('.weather-icon');
let temp = document.querySelector('.temp');
let cityNameHTMl = document.querySelector('.city');
let humid = document.querySelector('.humidity');
let wind = document.querySelector('.wind')



document.getElementById('searchButton').addEventListener('click',function(e){
    let cityName = document.querySelector('#cityName').value;
    if(cityName===''){
        alert('Enter a city name first')
    }else{
        getAPI(cityName);
        displayCityName(cityName)
    }
})

let url;

function getAPI(city){
    this.city = city;
    url = `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=3f0cf4d18784df9052dfe46a773d390e&units=metric`

    fetchData(url,city);
}

function fetchData(url,city){
    async function getTemp(url) {
        try {
            const response = await fetch(url);
            const data = await response.json();

            imageSelector(data.weather[0].main);

            tempDisplay(data.main.temp,city);

            humidityDisplay(data.main.humidity)

            windSpeed(data.wind.speed)
        } catch (error) {
            alert(`Error: ${error.message}`)
        }        
    }
    getTemp(url);
}

function imageSelector(data){
    let aboutImage = data;
    switch (aboutImage) {
        case 'Clear':
            image.setAttribute('src','images/clear.png')
            break;
        case 'Clouds':
            image.setAttribute('src','images/clouds.png')
            break
        case 'Drizzle':
            image.setAttribute('src','images/drizzle.png')
            break
        case 'Mist':
            image.setAttribute('src','images/mist.png')
            break
        case 'Rain':
            image.setAttribute('src','images/rain.png')
            break
        case 'Snow':
            image.setAttribute('src','images/snow.png')
            break
        default:
            break;
    }
}

function tempDisplay(temprature,city){
    temp.innerHTML = `${temprature}°C`;
    cityNameHTMl.innerHTML = `${city}`;
}

function humidityDisplay(humidity){
    humid.innerHTML = `${humidity}%`
}

function windSpeed(speed){
    wind.innerHTML = `${speed}Km/hr`
}
