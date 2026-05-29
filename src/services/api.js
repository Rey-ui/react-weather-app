import axios from "axios";

const BASE_URL = "https://api.openweathermap.org/data/2.5";
async function fetchWeather(city) {
  try {
    const response = await axios.get(`${BASE_URL}/weather`, {
      params: {
        appid: import.meta.env.VITE_API_KEY,
        q: city,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
async function searchCityForecastWeather(query) {
  const responce = await axios.get(`${BASE_URL}/forecast`, {
    params: {
      appid: import.meta.env.VITE_API_KEY,
      q: query,
    },
  });
  return responce.data.list;
}
export { fetchWeather, searchCityForecastWeather };
