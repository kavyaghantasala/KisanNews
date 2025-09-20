# 🌾 Kisan News

A Telegram bot that fetches live weather data for a user’s location or city, generates farmer-friendly advice using Google Gemini AI, and sends it back as a **voice note** in the local language.  
Built with Python, Telegram Bot API, OpenWeatherMap, Gemini API, and gTTS.  

---

## ✨ Features  

- 📍 **Location / City Input** — User can share GPS location or type a city name.  
- ☁️ **Live Weather Data** — Fetches current weather from OpenWeatherMap API.  
- 🤖 **AI Advice** — Generates short farmer-friendly tips using Gemini AI.  
- 🔊 **Voice Message Output** — Converts text to speech (Hindi by default) with gTTS and sends as Telegram voice note.  
- 🆓 **Zero-Budget Friendly** — Works locally or deployable to free platforms like Render / Railway.  

---

## 🛠️ Tech Stack  

- **Python 3.11+**  
- [python-telegram-bot v20+](https://github.com/python-telegram-bot/python-telegram-bot)  
- [OpenWeatherMap API](https://openweathermap.org/api)  
- [Google Gemini API](https://ai.google.dev/)  
- [gTTS](https://pypi.org/project/gTTS/) for TTS  
- ffmpeg (for MP3 → OGG conversion)  

---
