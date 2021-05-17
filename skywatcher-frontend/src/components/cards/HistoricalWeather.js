import React, { useState } from "react";
import { useFetchHistoricalWeather } from "../../services/ApiHelpers";
import { CardTitle, StyledCard } from "../CustomStyling";
// import Datetime from "react-datetime";

const HistoricalWeather = ({ lat, lon, unit }) => {
  const currentTime = parseInt(Date.now() / 1000);
  const [dateTime, setDateTime] = useState(currentTime);
  const { data, error, loading } = useFetchHistoricalWeather(
    lat,
    lon,
    dateTime,
    unit
  );

  if (error) throw error;
  if (loading) return <p>Still Loading!</p>;
  return (
    <StyledCard>
      <CardTitle>HistoricalWeather</CardTitle>
      {/* <Datetime onChange={(e) => setDateTime(e.target.value)} /> */}
      {JSON.stringify(data.current)}
    </StyledCard>
  );
};

export default HistoricalWeather;
