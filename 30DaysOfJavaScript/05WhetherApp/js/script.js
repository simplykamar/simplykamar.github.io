function setDate(){
  const date = document.querySelector('#date');
  const month = document.querySelector('#month');
  const day = document.querySelector('#day');
  const year = document.querySelector('#year');

  let days = ["Sunday", "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  let months = ["January", "February", "March","April","May","June","July","August","September","October","November","December"];

  let today = new Date();
  let dd = today.getDate();
  let mm = months[today.getMonth()]; //January is 0!
  let yyyy = today.getFullYear();
  let dy =days[today.getDay()];

  date.innerHTML = dd;
  day.innerHTML = dy;
  month.innerHTML = mm;
  year.innerHTML = yyyy;
}

async function getWeather(city){
  const key = "828cc99e0335c9476a8f751b7c386d9a";
  const temp = document.querySelector('#temp');
  const cit = document.querySelector('#city');
  const count = document.querySelector('#country');
  const api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;
  const notFound = document.querySelector('#not-found');
  const content = document.querySelector('.content');
  let response = await fetch(api);
  response = await response.json();
  if (response.cod==404){
    //let inner = document.querySelector('.content');
    content.style.display="none";
    notFound.style.display="block";
      return
      }
  content.style.display="block";
  notFound.style.display="none";
  cit.innerHTML  = response.name
  count.innerHTML = response.sys.country;
  temp.innerHTML = Math.floor(response.main.temp)+"°C"

if(response.weather[0].main == 'Clear') {
    document.body.style.backgroundImage = "url('img/Clear1.jpg')"
}
else if(response.weather[0].main == 'Clouds') {
    document.body.style.backgroundImage = "url('img/clouds.jpg')"
}
  else if(response.weather[0].main == 'Haze') {
      document.body.style.backgroundImage = "url('img/clouds.jpg')"
  }
else if(response.weather[0].main == 'Rain') {
    document.body.style.backgroundImage = "url('img/rain.jpg')"
}
else if(response.weather[0].main == 'Snow') {
    document.body.style.backgroundImage = "url('img/snow.jpg')"
}
else if(response.weather[0].main == 'Thunderstorm') {
    document.body.style.backgroundImage = "url('img/thunder.jpg')"
}
else if(response.weather[0].main == 'Sunny') {
    document.body.style.backgroundImage = "url('img/sunny.jpg')"
}

  setDate();
}
const form = document.querySelector('form');
form.addEventListener('submit',function(e){
  const inputCity = document.querySelector('#search');
  getWeather(inputCity.value);
  e.preventDefault();
});


