import clsx from "clsx";
import css from "./WeatherIconIdentifier.module.css";
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

const WeatherIconIdentifier = ({ weather, iconClass }) => {
  const weatherArr = {
    Clear: [WiDaySunny, "yellow"],
    Clouds: [WiCloud, "blue"],
    Rain: [WiDayRain, "blue"],
    Drizzle: [WiRainWind, "blue"],
    Thunderstorm: [WiDayLightning, "blue"],
    Snow: [WiSnow, "blue"],
    Mist: [WiWindy, "gray"],
    Smoke: [WiSmog, "gray"],
    Haze: [WiWindy, "gray"],
    Dust: [WiSandstorm, "yellow"],
    Fog: [WiFog, "gray"],
    Sand: [IoWarningOutline, "yellow"],
    Ash: [WiVolcano, "yellow"],
    Squall: [IoWarningOutline, "gray"],
    Tornado: [WiTornado, "gray"],
  };
  const weatherColor = weatherArr[weather][1];
  const Icon = weatherArr[weather][0] || WiCloud;

  return <Icon className={clsx(iconClass, css[weatherColor])} />;
};

export default WeatherIconIdentifier;
