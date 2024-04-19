export const setWeatherIcon = (weatherCode: number) => {
  switch (weatherCode) {
    case 0:
      return "https://openweathermap.org/img/wn/01d@2x.png";
    case 1:
      return "https://openweathermap.org/img/wn/02d@2x.png";
    case 3:
      return "https://openweathermap.org/img/wn/03d@2x.png";
    case 45 || 48:
      return "https://openweathermap.org/img/wn/50d@2x.png";
    case 51 || 53 || 55 || 56 || 57 || 80 || 81 || 83:
      return "https://openweathermap.org/img/wn/09d@2x.png";
    case 61 || 63 || 65 || 66 || 67:
      return "https://openweathermap.org/img/wn/10d@2x.png";
    case 71 || 73 || 75 || 77 || 85 || 86:
      return "https://openweathermap.org/img/wn/13d@2x.png";
    case 96 || 99:
      return "https://openweathermap.org/img/wn/11d@2x.png";
    default:
      return "";
  }
};
