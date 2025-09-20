import React, { useEffect, useState } from "react";
import "./LocationPrompt.css";
import { geocodeSearch, reverseGeocode } from "../api/openWeather";

const LocationPrompt = ({ onSelect }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => {
      if (!query) return setResults([]);
      setLoading(true);
      geocodeSearch(query)
        .then((r) => setResults(r || []))
        .catch(() => setResults([]))
        .finally(() => setLoading(false));
    }, 350);
    return () => clearTimeout(id);
  }, [query]);

  const choose = (r) => {
    onSelect({
      name: r.name,
      state: r.state,
      country: r.country,
      lat: r.lat,
      lon: r.lon,
    });
  };

  const useCurrent = () => {
    if (!navigator.geolocation) return alert("Geolocation not supported.");
    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const { latitude, longitude } = pos.coords;
        setLoading(true);
        const rev = await reverseGeocode(latitude, longitude);
        setLoading(false);
        if (rev) {
          choose(rev);
        } else {
          onSelect({ name: "Current Location", lat: latitude, lon: longitude });
        }
      },
      (err) => {
        setLoading(false);
        alert("Unable to get current location: " + err.message);
      }
    );
  };

  return (
    <div className="locationPrompt">
      <h2>Where are you?</h2>
      <p className="lp-sub">Search for a city or use your current location</p>
      <div className="lp-search">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search city, e.g. Hyderabad"
        />
        <button className="lp-use" onClick={useCurrent} disabled={loading}>
          Use my location
        </button>
      </div>

      <div className="lp-results">
        {loading && <div className="lp-loading">Searching...</div>}
        {!loading && results.length === 0 && query && (
          <div className="lp-empty">No results</div>
        )}
        <ul>
          {results.map((r, i) => (
            <li key={i} onClick={() => choose(r)}>
              <strong>{r.name}</strong>
              <span>
                {r.state ? `, ${r.state}` : ""} {r.country}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LocationPrompt;
