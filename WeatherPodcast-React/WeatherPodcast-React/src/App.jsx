import "./App.css";
import React, { useState, useCallback } from "react";
import HeaderComp from "./components/HeaderComp";
import WeatherCard from "./components/WeatherCard";
import VoiceMsg from "./components/voiceMsg/VoiceMsg";
import LocationPrompt from "./components/LocationPrompt";
import { fetchCurrentWeather } from "./api/openWeather";

function App() {
  const [location, setLocation] = useState(null);
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);

  const loadWeather = useCallback(
    async (lat, lon) => {
      try {
        setLoading(true);
        const data = await fetchCurrentWeather(lat, lon);
        setWeather(data);
      } catch (err) {
        console.error(err);
        alert("Failed to load weather");
      } finally {
        setLoading(false);
      }
    },
    []
  );

  const handleSelectLocation = (loc) => {
    setLocation(loc);
    if (loc.lat && loc.lon) {
      loadWeather(loc.lat, loc.lon);
    }
  };

  const handleRefresh = () => {
    if (!location) return;
    const { lat, lon } = location;
    if (lat && lon) loadWeather(lat, lon);
  };

  return (
    <section className="main-app">
      <HeaderComp onRefresh={handleRefresh} refreshing={loading} />
      <div className="subApp">
        {!location && <LocationPrompt onSelect={handleSelectLocation} />}
        {location && weather && (
          <>
            <WeatherCard weather={weather} location={location} />
            <VoiceMsg title={"Today's Weather Summary" } language={"Hindi"} audioSrc="/weatherReport.mp3"/>
          </>
        )}
      </div>
    </section>
  );
}

export default App;
