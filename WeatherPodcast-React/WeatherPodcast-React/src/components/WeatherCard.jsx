import React from "react";
import "./weatherCard.css";
import { IoMdPin } from "react-icons/io";
import { TiWeatherSunny } from "react-icons/ti";
import SmallCards from "./smallCards/SmallCards";

const WeatherCard = ({ weather, location }) => {
  if (!weather) return null;

  console.log(weather);
  console.log('Rain data:', weather.rain);



  const temp = Math.round(weather.main?.temp);
  const humidity = weather.main?.humidity;
  const wind = Math.round((weather.wind?.speed || 0) * 3.6); // m/s -> km/h
  // const rainfall = (weather.rain && (weather.rain["1h"] || weather.rain["3h"])) || 0;
   const pressure = weather.main?.pressure;
  const desc = weather.weather && weather.weather[0] ? weather.weather[0].description : "";

  const weatherData = [
    { title: "Temperature", value: temp, unit: "°C" },
    { title: "Humidity", value: humidity, unit: "%" },
    { title: "Pressure", value: pressure, unit: "hPa" },
    { title: "Wind Speed", value: wind, unit: "km/h" },
  ];

  const place = location
    ? `${location.name || "Unknown"}${location.state ? ", " + location.state : ""}, ${location.country || ""}`
    : weather.name || "";

  const now = new Date();
  const timeStr = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

  return (
    <div className="weatherMainCard">
      <div className="weatherCardTop">
        <div className="weatherCardTopCollection">
          <div className="weatherCardTopSubCollection">
            <IoMdPin className="weatherCardIcons" />
            <p>{place}</p>
          </div>
          <p className="weatherCardTopCollectionpara">Today, {timeStr}</p>
        </div>
      </div>
      <div className="weatherCardTopSecond">
        <p>{now.toLocaleDateString()}</p>
      </div>
      <div className="weathermainTemp">
        <p>
          {temp}
          <span className="celsuisicon">°</span>
        </p>
      </div>
      <div>
        <div className="weatherCardTopCollection weatherCardTopCollection1">
          <TiWeatherSunny className="weatherCardIcons weatherCardIcons1" />
          <p>{desc}</p>
        </div>
      </div>
      <div className="smallCardsCollection">
        {weatherData.map((item, index) => (
          <SmallCards key={index} title={item.title} value={item.value} unit={item.unit} />
        ))}
      </div>
    </div>
  );
};

export default WeatherCard;
