import React, { useState, useEffect } from "react";
import { useFetchAirPollution } from "../../services/ApiHelpers";
import { CardTitle, StyledCard } from "../CustomStyling";

const AirPollution = ({ lat, lon }) => {
  const { data, error, loading } = useFetchAirPollution({ lat, lon });
  const cities = [{ city: "newyork", lat: "40.7143", lon: "-74.006" }];

  const defaultPollutant = [
    {
      name: "PM2.5",
      value: 1.39,
      units: "µg/m3",
      alias: "Fine particles matter",
    },
    {
      name: "PM10",
      value: 1.94,
      units: "μg/m3",
      alias: "Coarse partucles matter",
    },
    { name: "O3", value: 101.57, units: "μg/m3", alias: "Ozone" },
    { name: "NO2", value: 3.51, units: "μg/m3", alias: "Nitrogen dioxide" },
    { name: "SO2", value: 1.54, units: "μg/m3", alias: "Sulphur dioxide" },
    { name: "CO", value: 203.61, units: "pμg/m3", alias: "Carbon monoxide" },
  ];

  const hello = "Hello World!";

  if (loading) return <p>Still Loading!</p>;
  if (error) throw error;
  return (
    <StyledCard>
      <CardTitle>Air Pollution</CardTitle>
      {/* Object.entries(data.list[0].components).map((k, v) => (
        <>
          <p>
            {k[0]}: {k[1]}
          </p>
        </>
       )) */}
      {defaultPollutant.map((item) => (
        <>
          <p>
            {item.alias},{item.name},{item.value},{item.units}
          </p>
        </>
      ))}
    </StyledCard>
  );
};

export default AirPollution;
