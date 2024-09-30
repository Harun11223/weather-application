const weatherBtn = document.getElementById("weatherBtn");
weatherBtn.addEventListener("click", ()=>{
    getWeather()
});

const getWeather = ()=>{
    const input = document.getElementById("input").value;
    const apiKey = '99fa1b907c7b75251463b3b1b1e9add5';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        const Temprature = parseInt(data.main.temp);
        const temp = document.getElementById("temp");
        temp.innerHTML = Temprature +`&#8451`;

        const citysValue = document.getElementById("citysValue");
        citysValue.innerText = input;

        
        const showHumidity = document.getElementById("showHumidity");
        const humidity = data.main.humidity;
        showHumidity.innerText = humidity + '%';

        const showWindSpeed = document.getElementById("showWindSpeed");
        const windSpeed = data.wind.speed;
        showWindSpeed.innerHTML = windSpeed + 'm/s<sup>1</sup>'


    })
}