function getWeather() {
    let city = document.getElementById("city").value;
    if (city) {
        let url = `https://wttr.in/${city}?format=%C+. 
        Температура воздуха: %t+. Влажность: %h+ . Скорость ветра: %w`; 
        fetch(url)
            .then(response => response.text())
            .then(data => {
                document.getElementById("weather").innerText = data;
            })
            .catch(error => {
                document.getElementById("weather").innerText = "Error while retrieving data.";
            });
    } else {
        document.getElementById("weather").innerText = "Пожалуйста,напишите название города.";
    }
}