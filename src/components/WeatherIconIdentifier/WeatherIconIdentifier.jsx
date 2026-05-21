import { IoWarningOutline } from "react-icons/io5";
import {
  WiCloud,
  WiDaySunny,
  WiDayRain,
  WiDayLightning,
  WiSnow,
  WiRainWind,
  WiWindy,
  WiSandstorm,
  WiSmog,
  WiTornado,
  WiFog,
  WiVolcano,
} from "react-icons/wi";

const WeatherIconIdentifier = ({ weather }) => {
  const weatherArr = {
    Clear: WiDaySunny,
    Clouds: WiCloud,
    Rain: WiDayRain,
    Drizzle: WiRainWind,
    Thunderstorm: WiDayLightning,
    Snow: WiSnow,
    Mist: WiWindy,
    Smoke: WiSmog,
    Haze: WiWindy,
    Dust: WiSandstorm,
    Fog: WiFog,
    Sand: IoWarningOutline,
    Ash: WiVolcano,
    Squall: IoWarningOutline,
    Tornado: WiTornado,
  };
  const Icon = weatherArr[weather] || WiCloud;

  return <Icon />;
};

export default WeatherIconIdentifier;
