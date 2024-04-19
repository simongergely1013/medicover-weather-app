import { weatherCodes } from "@/lib/weather-codes";
import { setStyles } from "./currentWeather.styles";
import { CurrentWeatherProps } from "./types";
import Image from "next/image";

const CurrentWeather = ({
  cityName,
  currentTemp,
  weatherCode,
  countryFlagImgSrc,
}: CurrentWeatherProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.div}>
        <span>
          <Image
            src={countryFlagImgSrc}
            alt="country-flag"
            width={32}
            height={32}
          />
        </span>
        <h3 className="text-xl">{cityName}</h3>
      </div>
      <h1 className="text-5xl">{Math.round(currentTemp)}°C</h1>
      <h2 className="text-xl">{weatherCodes[weatherCode]}</h2>
    </div>
  );
};

const styles = setStyles();

export default CurrentWeather;
