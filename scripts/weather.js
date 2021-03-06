export default function weather() {
    fetch('https://api.weatherapi.com/v1/current.json?key=c54d9525f89c41f0a7c194602220202&q=Juiz-de-Fora&aqi=no')
  
    .then(response => response.json())
    .then(data =>{
      const location = document.querySelector('.location p')
      const temperature = document.querySelector('.temperature p')
      const icon = document.querySelector('.weather-icon img')
      location.textContent = `${data.location.name} - MG`
      temperature.textContent = `${data.current.temp_c.toFixed(0)}`
      icon.src = data.current.condition.icon
      
      

      
    })
  }