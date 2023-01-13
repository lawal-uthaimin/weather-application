const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');

const updateUI = (data) =>{
  const cityDets = data.cityDets;
  const weather = data.weather;

  details.innerHTML = `  
  <h5 class="my-3" style="font-family:san-serif; font-size:25px;">${cityDets.Country.EnglishName}</h5>
  <div class="my-3">${weather.WeatherText}</div>
  <div class="my-3">${cityDets.EnglishName}</div>
  <div class="display-4 my-4"></div>
      <span>${weather.Temperature.Metric.Value}</span>
      <span>&deg;c</span>
  </div>`;

  
  const iconSrc = `fonts/${weather.WeatherIcon}.png`
  icon.setAttribute('src', iconSrc);

  let timeSrc = null;
  if(weather.IsDayTime){
    timeSrc = 'day/sunny.jpeg';
  } else{
    timeSrc = 'day/night.jpeg';
  }
  time.setAttribute('src', timeSrc);
} 


const updateCity = async (city) =>{
   const cityDets = await getCity(city);
   const weather = await getWeather(cityDets.Key);

   return{ cityDets, weather};
}


cityForm.addEventListener('submit', e =>{
  e.preventDefault();

  const city = cityForm.city.value.trim()

  cityForm.reset();

  updateCity(city)
    .then(data =>  updateUI(data))
    .catch(err => console.log(err));
});

