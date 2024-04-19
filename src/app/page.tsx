"use client";
import SearchModal from "@/components/searchModal/searchModal";
import CurrentWeather from "@/components/currentWeather/currentWeather";
import ForecastTable from "@/components/forecastTable/forecastTable";
import axios from "axios";
import { useState } from "react";
import { setStyles } from "./styles";

export default function Home() {
  const [data, setData] = useState<any>(null);
  const [currentCity, setCurrentCity] = useState("");
  const [currentCityFlagSrc, setCurrentCityFlagSrc] = useState<string>("");

  const handleSubmit = async (
    latitude: number,
    longitude: number,
    countryFlagSrc: string
  ) => {
    const { data } = await axios(setApiUrl(latitude, longitude));
    setData(data);
    setCurrentCity(sessionStorage.getItem("city") || "");
    setCurrentCityFlagSrc(countryFlagSrc);
  };

  return (
    <main className={styles.main}>
      <h1 className={styles.header}>Weather Forecast</h1>
      <SearchModal
        onSubmit={(
          latitude: number,
          longitude: number,
          countryFlagSrc: string
        ) => handleSubmit(latitude, longitude, countryFlagSrc)}
      />
      {data && (
        <div className={styles.topWrapper}>
          <div className={styles.currentWeatherContainer}>
            <CurrentWeather
              cityName={currentCity}
              currentTemp={data.current.temperature_2m}
              weatherCode={data.current.weather_code}
              countryFlagImgSrc={currentCityFlagSrc}
            />
          </div>
          <div className={styles.tableContainer}>
            <h1 className={styles.tableHeader}>7-Day Forecast</h1>
            <ForecastTable data={data.daily} />
          </div>
        </div>
      )}
    </main>
  );
}

const styles = setStyles();
const setApiUrl = (latitude: number, longitude: number) => {
  return `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max`;
};
