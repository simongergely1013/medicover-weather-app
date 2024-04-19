export interface DayData {
  day: number;
  precipitationProbability: number;
  minTemp: number;
  maxTemp: number;
  weatherCode: number;
}

export const createTableData = (data: any) => {
  const tableData: DayData[] = [];

  for (let i = 0; i < data.time.length; i++) {
    tableData.push({
      day: 0,
      precipitationProbability: 0,
      minTemp: 0,
      maxTemp: 0,
      weatherCode: 0,
    });
    tableData[i].day = data.time[i];
    tableData[i].precipitationProbability =
      data.precipitation_probability_max[i];
    tableData[i].minTemp = data.temperature_2m_min[i];
    tableData[i].maxTemp = data.temperature_2m_max[i];
    tableData[i].weatherCode = data.weather_code[i];
  }

  return tableData;
};
