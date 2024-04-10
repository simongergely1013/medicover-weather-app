"use client";
// import SearchModal from "@/components/searchModal/searchModal";
// import axios from "axios";
// import { useState } from "react";

export default function Home() {
  // const [data, setData] = useState(null);
  // const [currentCity, setCurrentCity] = useState("");

  // const handleSubmit = async (latitude: number, longitude: number) => {
  //   const { data } = await axios(setApiUrl(latitude, longitude));
  //   setData(data);
  //   setCurrentCity(sessionStorage.getItem("city") || "");
  // };

  return (
    <main className="flex min-h-screen flex-col items-center  p-24 border">
      <h1>Medicover Weather Forecast</h1>
      {/* <SearchModal
        onSubmit={(latitude: number, longitude: number) =>
          handleSubmit(latitude, longitude)
        }
      /> */}
    </main>
  );
}

// const setApiUrl = (latitude: number, longitude: number) => {
//   return `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max`;
// };
