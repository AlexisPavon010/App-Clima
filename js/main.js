
const form = document.getElementsByTagName('form')
addEventListener('submit', async (e)=>{
    e.preventDefault()
    const city = e.target.elements.city.value 
    if (city === "") {
        alert('Error')
    }
    const Api_URL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=ffb12d2e065b82a33b865cd943778ffa`
    const res = await fetch(Api_URL) 
    const data = await res.json()
    const {temp, temp_max, temp_min, humidity, pressure} = data.main;
    const div = document.getElementById('root')
    div.innerHTML = 
    `<div class="card">
        <div class="card-body">
            <h2 class="text-center">${data.name}</h2>
            <h3>Temperatura: ${temp}°c</h3>
            <h4>humedad: ${humidity}</h4>
            <h4>presion atmosferica: ${pressure} p/s</h4>
            <h6>min ${temp_min}°c</h6>
            <h6>max ${temp_max}°c</h6>
        </div>
    </div>`
    console.log(data)
    
    

})

