//https://www.donbasssos.org/wp-content/uploads/2015/05/168486_214fa69d.jpg

let block = document.querySelector('body');
let now = new Date().toLocaleString();
document.querySelector('span').innerHTML = now;
//block.style.background = "url('https://upload.wikimedia.org/wikipedia/commons/3/30/Rubizhne_panorama.jpg')";


let cityList = [
    {
        "id": 695274,
        "name": "Rubizhne",
        "state": "",
        "country": "UA",
        "coord": {
            "lon": 38.379669,
            "lat": 49.012291
        }
    },
    {
        "id": 691999,
        "name": "Syevyerodonets’k",
        "state": "",
        "country": "UA",
        "coord": {
            "lon": 38.491661,
            "lat": 48.948318
        }
    },
    {
        "id": 702972,
        "name": "Lysychans’k",
        "state": "",
        "country": "UA",
        "coord": {
            "lon": 38.44207,
            "lat": 48.90485
        }
    },
]

//let now = moment();
//alert(now);
//let backGr = {
//    "Рубежное": "url('https://upload.wikimedia.org/wikipedia/commons/3/30/Rubizhne_panorama.jpg')",
//    "691999": "url('/img/168486_214fa69d.jpg')",
//    "702972": "url('https://ic.pics.livejournal.com/questrum/14711474/4419849/4419849_original.jpg')"
//}

function chooseCities() {

    let city = +document.querySelector('.choiseSity').value;
    console.log(city);
    fetch(`https://api.openweathermap.org/data/2.5/weather?id=${city}&lang=ru&&appid=68147acf6fa477f07a933575020eb023`)
        .then(function (resp) { return resp.json() })
        .then(function (data) {
            console.log(data);
            document.querySelector('.package-name').textContent = data.name;
            document.querySelector('.price').innerHTML = '+' + Math.round(data.main.temp - 273) + '&deg' + 'C';
            document.querySelector('.disclaimer').innerHTML = `${data.weather[0].description}`;
            document.querySelector('.features1').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"/>`;
            document.querySelector('.features2').textContent = `Относительная влажность: ${data.main.humidity} %`;
            document.querySelector('.features3').textContent = `Давление: ${data.main.pressure} мм`;
            document.querySelector('.features4').textContent = `Скорость ветра: ${data.wind.speed} м/с`;
            let a5 = {
                "Рубежное": 'url("img/rpark80.jpg")',
                "Северодонецк": 'url("img/s41134487.jpg")',
                "Лисичанск": 'url("img/LesyaMestoTitel.jpg")'
            }
            let out = '';
            for (let key in a5) {
                if (key == data.name) {
                    out += a5[key];
                }
            }
            block.style.backgroundImage = out;
        })
        .catch(function () {
            //https://openweathermap.org/img/wn/03d@2x.png / 01d  
        });
};

document.querySelector('.choiseSity').onchange = chooseCities;

//document.body.style.backgroundImage = imageUrl

