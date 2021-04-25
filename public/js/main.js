const submit = document.getElementById('submitBtn');
const cityName = document.getElementById('cityName');

const week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
var d = new Date();
const day = document.querySelector('.day');
const date = document.querySelector('.date');
day.innerHTML = week[d.getDay()];
date.innerHTML = d.getDate() + " " + month[d.getMonth()];

const temperature = document.querySelector('.temp');
const wicon = document.querySelector('.wicon');

const middleLayer = document.querySelector('.middleLayer');

const getInfo = async (event) => {
    event.preventDefault();
    try{
        if(cityName.value == ""){
            city.innerText = "Plz Write City Name";
        }
        else{
            try{
                let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&appid=e0e2b14ab8ca45fbdf9b70c2a2abf507`;
                data = await fetch(url);
                dataInfo = await data.json();

                city.innerHTML = dataInfo.name;
                let num = dataInfo.main.temp - 273.15;
                if(Number(num) === num && num % 1 !== 0)
                {
                    num = num.toFixed(2);
                }
                temperature.innerHTML = num
                let status = dataInfo.weather[0].main;
                if(status == "Clear"){
                    wicon.innerHTML = `<i class="fas fa-sun" style="color: #eccc68"></i>`
                }
                else if(status == "Clouds"){
                    wicon.innerHTML = `<i class="fas fa-cloud" style="color: #f1f2f6"></i>`;
                }
                else if(status == "Rain"){
                    wicon.innerHTML = `<i class="fas fa-rain" style="color: #a4b0be"></i>`;
                }
                else{
                    wicon.innerHTML = `<i class="fas fa-sun" style="color: #f1f2f6"></i>`;   
                }

                middleLayer.setAttribute("class", "dataShow");
            }
            catch{
                city.innerText = "Plz Enter Valid City Name";
            }
        }
    }
    catch(err){
        console.log("API is Currently is Offline");
    }
}


submit.addEventListener('click', getInfo);