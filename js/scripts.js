console.log('javascript connected!');

const carousel = new bootstrap.Carousel('#homeCarousel', {
    interval: 5000,
    pause: false
})

const carouselButton = document.getElementById('carouselButton');
const faIcon = document.getElementById('faButton');

carouselButton.addEventListener('click', function () {
    if (faIcon.classList.contains('fa-pause')) {
        faIcon.classList.remove('fa-pause');
        faIcon.classList.add('fa-play');
        carousel.pause();
    } else {
        faIcon.classList.remove('fa-play');
        faIcon.classList.add('fa-pause');
        carousel.cycle();
    }
})

// when the play button is clicked, begin cycling through the images
//const carouselPlay = document.getElementById('carouselPlay');
//carouselPlay.addEventListener('click', function () {
//console.log('cycle the carousel');
//carousel.cycle();
//})

//const apiKey = process.env.OPEN_WEATHER_API_KEY;

const city = "Bradenton";
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;

async function fetchWeather() {
    try {
        let weatherData = await fetch(url);
        let json = await weatherData.json();
        displayWeather(json);
    } catch (error) {
        console.log(error);
    }
}

fetchWeather();

function displayWeather(json) {
    let temp = json[0].main.temp;
    let desc = json[0].weather.description;
    let icon = json[0].weather.icon;

    img = document.createElement('img');
    img.src = `https://openweathermap.org/img/w/${icon}.png`;
    document.getElementById('weather-icon').appendChild(img);

    tempNode = weather.createTextNode(`${temp} \u00B0`);
    document.getElementById('weather-temp').appendChild(tempNode);

    descNode = document.body.createTextNode(`${desc}`);
    document.getElementById('weather-description').appendChild(descNode);
}
