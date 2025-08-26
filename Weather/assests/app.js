   let valuesearch = document.getElementById('valuesearch');
   let valuesearch = document.getElementById('city')
   let valuesearch = document.getElementById('temperature')
   let description = document.querySelector('.description')
   let clouds = document.getElementById('clouds')
   let humidity = document.getElementById('humidity')
   let pressure = document.getElementById('pressure')
   let form = document.querySelector('form');
   let main = document.querySelector('main');
   form.addEventListener('submit' , (event)=> {
    event.preventDefault();
    if(valuesearch.vakue != ''){
        searchweather();
    }
   })
   let id = '9505fd1df737e20152fbd78cdb289b6a';
   let url = 'https://api.openweathermap.org/data/2.5weather?units=metric&appid=';
   const searchweather = () => {
    fetch(url + '&q=' + valuesearch.value)
    .then(responsive => responsive.json())
    .then(data => {
        console.log(data);
        if(data.cod == 200){
            city.querySelector('figcaption').innerText = data.name;
            city.querySelector('img').src= 'https://flagsapi.com/' +data.sys.country+'/shiny/32.png';

            temparature.querySelector('img').src= 'http://openweathermap.org/img/wn/'+data.weather[0].icon+'@4x.png';
            temparature.querySelector('figcaption span').innerText = data.main.temp;
            description.innerText = data.weather[0].description;
            clouds.innerText = data.clouds.all;
            humidity.innerText = data.main.humidity;
            pressure.innertext = data.maim.pressure;
        
    }else{
        // false
        main.classList.add('error');
        setTimeout(() => {
            main.classList.remove('error');
        }, 1000);
    }
    valuesearch.value = '';
    })
   }
   const initApp = () => {
       valuesearch.value = 'Wahington';
    searchweather();
   }
  initApp();