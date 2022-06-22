document.querySelector("#btnSearch").addEventListener("click", () =>{
    let text = document.querySelector("#txtSearch").value;
    getWeather(text);
});


async function getWeather(name){
    const apiKey = "40c844aeb7b348af8cd95840222206";
    const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${name}&aqi=no`
    
    const response = await fetch(url);
    const data = await response.json();
    newData = [data];
    renderWeather(newData[0]);
    console.log(newData);
    console.log(typeof newData)
}


function renderWeather(data){
    document.querySelector("#countryDetails").innerHTML = "";

    let html = `
        <div class="col-4">
            <img src="${data.current.condition.icon}" class="img-fluid">
        </div>
        <div class="col-8">
            <h3 class="card-title">${data.location.country}/${data.location.name}</h3>
        <hr>
        <div class="row">
             <div class="col-4">Weather</div>
             <div class="col-8">${data.current.condition.text}</div>
        </div>
        </div>
    
    `
    console.log("pley")
    document.querySelector("#countryDetails").innerHTML = html;

}
