const BASE_GEOCODE = "https://api.openweathermap.org/geo/1.0";
const BASE_WEATHER = "https://api.openweathermap.org/data/2.5";

function getKey() {
  return import.meta.env.VITE_OPENWEATHER_KEY || "";
}

export async function geocodeSearch(q) {
  if (!q) return [];
  const key = getKey();
  const url = `${BASE_GEOCODE}/direct?q=${encodeURIComponent(q)}&limit=5&appid=${key}`;
  const res = await fetch(url);
  if (!res.ok) return [];
  return res.json();
}

export async function reverseGeocode(lat, lon) {
  const key = getKey();
  const url = `${BASE_GEOCODE}/reverse?lat=${lat}&lon=${lon}&limit=1&appid=${key}`;
  const res = await fetch(url);
  if (!res.ok) return null;
  const data = await res.json();
  return data && data[0] ? data[0] : null;
}

export async function fetchCurrentWeather(lat, lon, units = "metric") {
  const key = getKey();
  const url = `${BASE_WEATHER}/weather?lat=${lat}&lon=${lon}&units=${units}&appid=${key}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch weather");
  return res.json();
}

export default { geocodeSearch, reverseGeocode, fetchCurrentWeather };
