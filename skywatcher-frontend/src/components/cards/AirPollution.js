import React, { useState } from "react";
import { ButtonGroup, ToggleButton } from "react-bootstrap";
import { useFetchAirPollution } from "../../services/ApiHelpers";
import { CardTitle, StyledCard } from "../CustomStyling";

const AirPollution = ({ lat, lon }) => {
  const { data, error, loading } = useFetchAirPollution({ lat, lon });

  const [pollutant, setPollutant] = useState("co");

  const pollutantNames = {
    co: "Carbon Monoxide",
    no: "Nitrogen Monoxide",
    no2: "Nitrogen Dioxide",
    o3: "Ozone",
    so2: "Sulphur Dioxide",
    pm2_5: "Fine Particles Matter",
    pm10: "Coarse Particulate Matter",
    nh3: "Ammonia",
  };

  const defaultPollutant = [
    {
      name: "pm2_5",
      value: 1.39,
      units: "µg/m3",
      alias: "Fine particles matter",
    },
    {
      name: "pm10",
      value: 1.94,
      units: "μg/m3",
      alias: "Coarse particles matter",
    },
    { name: "O3", value: 101.57, units: "μg/m3", alias: "Ozone" },
    { name: "NO2", value: 3.51, units: "μg/m3", alias: "Nitrogen dioxide" },
    { name: "SO2", value: 1.54, units: "μg/m3", alias: "Sulphur dioxide" },
    { name: "CO", value: 203.61, units: "pμg/m3", alias: "Carbon monoxide" },
  ];

  if (loading) return <p>Still Loading!</p>;
  if (error) throw error;
  return (
    <StyledCard>
      <CardTitle className="mt-auto">Air Quality Index</CardTitle>
      <h1>{data.list[0].main.aqi}</h1>
      <emph className="mt-auto">{pollutantNames[pollutant]}</emph>
      <h3>{data.list[0].components[pollutant]}</h3>
      <ButtonGroup toggle className="mt-auto">
        {Object.entries(data.list[0].components).map((k, v) => (
          <ToggleButton
            size="sm"
            type="radio"
            variant="dark"
            name="pollutant"
            value={k[0]}
            checked={pollutant === k[0]}
            onChange={(e) => setPollutant(e.currentTarget.value)}
          >
            {k[0]}
          </ToggleButton>
        ))}
      </ButtonGroup>

      {/* {defaultPollutant.map((item) => (
        <>
          <p>
            {item.alias},{item.name},{item.value},{item.units}
          </p>
        </>
      ))} */}
    </StyledCard>
  );
};

export default AirPollution;
