import React from "react";
import { useFetchAirPollution } from "../../services/ApiHelpers";
import { CardTitle, StyledCard } from "../CustomStyling";

const AirPollution = () => {
  const { data, error, loading } = useFetchAirPollution({ lat: 0, lon: 0 });

  if (loading) return <p>Still Loading!</p>;
  if (error) throw error;
  return (
    <StyledCard>
      <CardTitle>Air Pollution</CardTitle>
    </StyledCard>
  );
};

export default AirPollution;
