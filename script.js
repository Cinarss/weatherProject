

document.querySelector("#btnSearch").addEventListener("click", () =>{
    let text = document.querySelector("#txtSearch").value;
    getWeather(text);
});


async function getWeather(name){
    const apiKey = "40c844aeb7b348af8cd95840222206";
    const url = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${name}&days=10&aqi=yes&alerts=yes`
    
    const response = await fetch(url);
    const data = await response.json();
    newData = [data];
    renderWeather(newData[0]);
    arrow(newData[0]);
    console.log(newData);
    console.log(typeof newData)
}


function renderWeather(data){
    document.querySelector("#countryDetails").innerHTML = "";

    let html = `
        <div class="col-4">
        <div class="row">
        
        <img src="${data.current.condition.icon}" class="img-fluid">
        <h2>${data.current.temp_c}</h2> °C
            </div>
            
        </div>
        <div class="col-8 ">
            <h3 class="card-title">${data.location.country}/${data.location.name}</h3>
        <hr>
        <div class="row mb-1">
             <div class="col-4">Weather</div>
             <div class="col-8">${data.current.condition.text}</div>
        </div>

        <div class="row mb-1">
             <div class="col-4">Humidity</div>
             <div class="col-8">${data.current.humidity}</div>
        </div>

        <div class="row mb-1">
             <div class="col-4">Feelslike</div>
                <div class="col-8"><svg version="1.1" id="katman_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                width="30px" height="30px" viewBox="0 0 40 40" enable-background="new 0 0 40 40" xml:space="preserve">
                <path fill="#DAE2E7" d="M20,0.35C9.15,0.35,0.35,9.15,0.35,20c0,10.85,8.8,19.65,19.65,19.65c10.85,0,19.65-8.801,19.65-19.65
                C39.65,9.15,30.85,0.35,20,0.35z M20,36.5c-9.11,0-16.5-7.391-16.5-16.5c0-9.11,7.39-16.5,16.5-16.5c9.109,0,16.5,7.39,16.5,16.5
                C36.5,29.109,29.109,36.5,20,36.5z"/>
            <path fill="#33B3A0" d="M25.43,19.69l-5.41,9.5l-5.45-9.569l3.81,1.09V7.09c0.59-0.2,1.64-0.38,3.24-0.03v13.67L25.43,19.69z"/>
        </svg></div>
        </div>

        <div class="row mb-1">
             <div class="col-4">Humidity</div>
             <div class="col-8">${data.current.humidity}</div>
        </div>
        </div>
    
    `
    console.log("pley")
    document.querySelector("#countryDetails").innerHTML = html;

}


function arrow(data){
    let dir = document.querySelector("#katman_1")

    if(data.current.wind_dir == "W"){
        dir.classList = "w"
    }

     if(data.current.wind_dir ="E"){
        dir.classList = "e";
    }

     if(data.current.wind_dir ="S"){
        dir.classList = "s";
    }

     if(data.current.wind_dir ="N"){
        dir.classList = "n";
    }

     if(data.current.wind_dir ="W"){
        dir.classList = "w";
    }

     if(data.current.wind_dir ="WSW"){
        dir.classList = "wsw";
    }

     if(data.current.wind_dir ="WNW"){
        dir.classList = "wnw";
    }

     if(data.current.wind_dir ="ESH"){
        dir.classList = "esh";
    }

     if(data.current.wind_dir ="ENH"){
        dir.classList = "enh";
    }

     if(data.current.wind_dir ="NNH"){
        dir.classList = "nnh";
    }

     if(data.current.wind_dir ="NNW"){
        dir.classList = "nnw";
    }

     if(data.current.wind_dir ="ESH"){
        dir.classList = "esh";
    }

     if(data.current.wind_dir ="SSW"){
        dir.classList = "ssw";
    }

     if(data.current.wind_dir ="SSH"){
        dir.classList = "ssh";
    }

    
}
