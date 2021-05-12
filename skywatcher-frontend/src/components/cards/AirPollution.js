import React from "react";
import { useFetchAirPollution } from "../../services/ApiHelpers";
import { CardTitle, StyledCard } from "../CustomStyling";

const AirPollution = ({ lat, lon }) => {
  const { data, error, loading } = useFetchAirPollution({ lat, lon });

  if (loading) return <p>Still Loading!</p>;
  if (error) throw error;
  return (
    <StyledCard>
      <CardTitle>Air Pollution</CardTitle>
      <p>{JSON.stringify(data)}</p>
    </StyledCard>
  );
};

export default AirPollution;
