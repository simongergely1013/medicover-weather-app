import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import { createTableData } from "@/lib/createTableData";
import { DayData } from "@/lib/createTableData";
import { setStyles } from "./forecastTable.styles";

const ForecastTable = ({ data }: any) => {
  const [tableData, setTableData] = useState<DayData[]>([]);

  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  useEffect(() => {
    const response = createTableData(data);
    setTableData(response);
  }, [data]);

  return (
    <TableContainer sx={styles.background}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={styles.tableCell} />
            <TableCell sx={styles.tableCell} align="right">
              Precipitation
            </TableCell>
            <TableCell sx={styles.tableCell} align="right">
              Min
            </TableCell>
            <TableCell sx={styles.tableCell} align="right">
              Max
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData &&
            tableData.map((el: DayData) => {
              const date = new Date(el.day);
              return (
                <TableRow
                  key={el.day}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell sx={styles.tableCell} component="th" scope="row">
                    {dayNames[date.getDay()]}
                  </TableCell>
                  <TableCell sx={styles.tableCell} align="right">
                    <div className={styles.precipitation}>
                      <WaterDropIcon />
                      <span> {el.precipitationProbability}%</span>
                    </div>
                  </TableCell>
                  <TableCell sx={styles.tableCell} align="right">
                    {Math.round(el.minTemp)}°C
                  </TableCell>
                  <TableCell sx={styles.tableCell} align="right">
                    {Math.round(el.maxTemp)}°C
                  </TableCell>
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const styles = setStyles();

export default ForecastTable;
