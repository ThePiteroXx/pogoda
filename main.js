const input = document.querySelector('input');
const btn = document.querySelector('button');

const day1 = document.querySelector('.day1');
const day2 = document.querySelector('.day2');
const day3 = document.querySelector('.day3');
const day4 = document.querySelector('.day4');

const photo = document.querySelector('.photo');
const photo1 = document.querySelector('.photo1');
const photo2 = document.querySelector('.photo2');
const photo3 = document.querySelector('.photo3');
const photo4 = document.querySelector('.photo4');

const wind = document.querySelector('.wind');
const wind1 = document.querySelector('.wind1');
const wind2 = document.querySelector('.wind2');
const wind3 = document.querySelector('.wind3');
const wind4 = document.querySelector('.wind4');


const cityName = document.querySelector('.city-name');
const warning = document.querySelector('.warning');

const temperature = document.querySelector('.temp');
const temperature1 = document.querySelector('.temp1');
const temperature2 = document.querySelector('.temp2');
const temperature3 = document.querySelector('.temp3');
const temperature4 = document.querySelector('.temp4');

const apiLink = 'https://api.openweathermap.org/data/2.5/forecast?q=';
const apikey = '&appid=def9d95dc55bafc4ba11ac86874448d6';
const units = '&units=metric';

let url;
let city;

const getWeather = () => {
    city = (!input.value) ? 'New York' : input.value;
    url = apiLink + city + apikey + units;

    axios.get(url)
        .then(res => {
            const listHours = res.data.list;

            const obj = listHours[0];
            const obj1 = listHours[8];
            const obj2 = listHours[16];
            const obj3 = listHours[24];
            const obj4 = listHours[32];
            
            const temp = obj.main.temp;
            const temp1 = obj1.main.temp;
            const temp2 = obj2.main.temp;
            const temp3 = obj3.main.temp;
            const temp4 = obj4.main.temp;

            const winding = obj.wind.speed;
            const winding1 = obj1.wind.speed;
            const winding2 = obj2.wind.speed;
            const winding3 = obj3.wind.speed;
            const winding4 = obj4.wind.speed;
            
            const firstDay = obj1.dt_txt.slice(5, 10);
            const secondDay = obj2.dt_txt.slice(5, 10);
            const thirdDay = obj3.dt_txt.slice(5, 10);
            const fourthDay = obj4.dt_txt.slice(5, 10);
            
            
            const status = Object.assign({}, ...obj.weather);
            const status1 = Object.assign({}, ...obj1.weather);
            const status2 = Object.assign({}, ...obj2.weather);
            const status3 = Object.assign({}, ...obj3.weather);
            const status4 = Object.assign({}, ...obj4.weather);
            
            
            addTexting();
            idCheck(status, photo);
            idCheck(status1, photo1);
            idCheck(status2, photo2);
            idCheck(status3, photo3);
            idCheck(status4, photo4);

            function idCheck(el, numberPhoto){
            
                if(el.id >= 200 & el.id < 233) {
                    numberPhoto.setAttribute('src', 'http://openweathermap.org/img/wn/11d@2x.png');
                } else if (el.id >= 300 & el.id < 322) {
                    numberPhoto.setAttribute('src', 'http://openweathermap.org/img/wn/09d@2x.png');
                } else if (el.id >= 500 & el.id < 532) {
                    numberPhoto.setAttribute('src', 'http://openweathermap.org/img/wn/10d@2x.png');
                } else if (el.id >= 600 & el.id < 623) {
                    numberPhoto.setAttribute('src', 'http://openweathermap.org/img/wn/13d@2x.png');
                } else if (el.id >= 700 & el.id < 782) {
                    numberPhoto.setAttribute('src', 'http://openweathermap.org/img/wn/50d@2x.png');
                } else if (el.id === 800) {
                    numberPhoto.setAttribute('src', 'http://openweathermap.org/img/wn/01d@2x.png');
                } else if (el.id === 801 ) {
                    numberPhoto.setAttribute('src', 'http://openweathermap.org/img/wn/02d@2x.png');
                } else if (el.id === 802 ) {
                    numberPhoto.setAttribute('src', 'http://openweathermap.org/img/wn/03d@2x.png');
                } else if (el.id === 803 || el.id === 804) {
                    numberPhoto.setAttribute('src', 'http://openweathermap.org/img/wn/04d@2x.png');
                } else {
                    numberPhoto.setAttribute('src', 'img/uknown.png');
                };

            };


            function addTexting() {
                // day
                temperature.textContent = Math.floor(temp) + '°C';
                cityName.textContent = res.data.city.name;
                wind.textContent = Math.floor(winding) + 'm/s';

                //day1
                temperature1.textContent = Math.floor(temp1) + '°C';
                day1.textContent = firstDay;
                wind1.textContent = Math.floor(winding1) + 'm/s';

                //day2
                temperature2.textContent = Math.floor(temp2) + '°C';
                day2.textContent = secondDay;
                wind2.textContent = Math.floor(winding2) + 'm/s';

                //day 3
                temperature3.textContent = Math.floor(temp3) + '°C';
                day3.textContent = thirdDay;
                wind3.textContent = Math.floor(winding3) + 'm/s';

                //day4
                temperature4.textContent = Math.floor(temp4) + '°C';
                day4.textContent = fourthDay;
                wind4.textContent = Math.floor(winding4) + 'm/s';
                

                warning.textContent = '';
                input.value = '';
            };
        }).catch(() => warning.textContent = 'Wpisz poprawną nazwe miasta')
};

const enterCheck = () => {
    if(event.code === 'Enter') {
        getWeather();
    }
};

getWeather();
btn.addEventListener('click', getWeather);
input.addEventListener('keydown', enterCheck);