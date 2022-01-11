var city = document.querySelector('.city');
var country = document.querySelector('.country');
var time = document.querySelector('.time');
var value = document.querySelector('.value');
var shortDecs = document.querySelector('.short-decs');
var visibility = document.querySelector('.visibility span');
var wind = document.querySelector('.wind span');
var sun = document.querySelector('.sun span');
var search = document.querySelector('.search');
var content = document.querySelector('.content');
var body = document.querySelector('body');
var weather = document.querySelector('#weather');

async function changeWeatherUI(searchValue) {
    // let searchValue = search.value.trim();
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=7358637f50134529054a385ec51c3b3d`;

    var data = await fetch(apiURL).then(res => res.json());
    console.log(data);
    if (data.cod == 200) {
        content.classList.remove('hide');
        city.innerText = data.name;
        country.innerText = data.sys.country;
        shortDecs.innerText = data.weather[0] ? data.weather[0].main : '';
        visibility.innerText = data.visibility + ' m';
        wind.innerText = data.wind.speed + ' m/s';
        sun.innerText = data.main.humidity + ' %';
        let temperature = Math.round((data.main.temp - 273.15));
        value.innerText = temperature;
        time.innerText = new Date().toLocaleString('vi');

        if (temperature > 25) {
            
            body.setAttribute('class', 'hot');
        }
        if (temperature <= 25) {
            body.setAttribute('class', 'warm');
        }
        if (temperature <= 22) {
            body.setAttribute('class', 'cool');
            
        }
        if (temperature <= 19) {
            
            body.setAttribute('class', 'cold');
        }
    } else {
        content.classList.add('hide');
    }

}

search.addEventListener('keypress', function (e) {
    if (e.code === 'Enter') {
        let searchValue = search.value.trim();
        changeWeatherUI(searchValue);
    }
   
});
changeWeatherUI('Hanoi');