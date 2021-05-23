import React from "react";
import { useFetchWeatherAlerts } from "../../services/ApiHelpers";
import { CardTitle, StyledCard } from "../CustomStyling";

const WeatherAlerts = ({ lat, lon }) => {
  const { data, error, loading } = useFetchWeatherAlerts(lat, lon);

  const alerts = [
    {
      lat: "40.7143",
      lon: "-74.006",
      timezone: "America/New_York",
      timezone_offset: "-14400",
    },
  ];

  if (loading) return <p>Still Loading!</p>;
  if (error) throw error;
  return (
    <StyledCard>
      <CardTitle>Weather Alerts</CardTitle>
      {/* <>
        <p>Timezone: {alerts[0].timezone}</p>
        <p>Latitude: {alerts[0].lat}</p>
        <p>Longitude: {alerts[0].lon}</p>
        <p>Timezone offset: {alerts[0].timezone_offset}</p>
      </> */}
      {data.alerts ? (
        data.alerts.map((alert, idx) => (
          <div id={`alert-${idx}`} className="mt-auto mb-auto">
            <p>Sender: {alert.sender}</p>
            <p>Event: {alert.event}</p>
            <p>Description: {alert.description}</p>
          </div>
        ))
      ) : (
        <h6 className="mt-auto mb-auto">
          No Weather Alerts in the Area Currently
        </h6>
      )}
    </StyledCard>
  );
};

export default WeatherAlerts;
