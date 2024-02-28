import { useState } from "react";
import rain from "./assets/rain.png";
import humidity from "./assets/humidity.png";
import wind from "./assets/wind.png";
import search from "./assets/search.png";

function App() {
  const [cityName, setCityname] = useState("");
  const [temperature, setTemperature] = useState("");
  const [feelsLike, setFeelslike] = useState("");
  const [humidity_s, setHumidity_s] = useState("");
  const [wind_s, setWind_s] = useState("");
  function valueInput(e) {
    setCityname(e.target.value);
  }
  function searchFunction() {
    if (cityName.length > 0) {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityName}&appid=00f3afc4416735b2b97f9996273f96c5`
      )
        .then((data) => {
          return data.json();
        })
        .then((data) => {
          setTemperature(data.main.temp);
          setWind_s(data.wind.speed);
          setHumidity_s(data.main.humidity);
          setFeelslike(data.main.feels_like);
          setCityname("");
        });
    }
  }
  return (
    <div className="wrapper">
      <div className="main">
        <h2 className="heading">Developed by Aayush</h2>
        <div className="search">
          <input
            type="text"
            name="search"
            spellCheck="false"
            placeholder="enter city name"
            value={cityName}
            onChange={(e) => valueInput(e)}
          />
          <button onClick={() => searchFunction()} id="search">
            <img src={search} alt="" />
          </button>
        </div>
        <div className="raining">
          <img src={rain} alt="" />
        </div>
        <div className="tempandFeel">
          <div className="temperature">
            <h1 id="temperatureText">{temperature}</h1>
            <h3>Temperature</h3>
          </div>
          <div className="feelsLike">
            <div className="text">
              <h2 id="feelsLikeText">{feelsLike}</h2>
              <h3>feels Like</h3>
            </div>
          </div>
        </div>
        <div className="footer">
          <div className="humidity">
            <img src={humidity} alt="" />
            <div className="text">
              <h2 id="humidityText">{humidity_s}</h2>
              <h3>Humidity</h3>
            </div>
          </div>
          <div className="wind">
            <img src={wind} alt="" />
            <div className="text">
              <h2 id="windText">{wind_s}</h2>
              <h3>WindSpeed</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
