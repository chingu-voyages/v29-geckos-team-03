import React from "react";
import { Container } from "react-bootstrap";

import useFetch from "../services/UseFetch";

const AirPollution_url = "http://localhost:4000/traffic";

const AirPollution = () => {
  const { data, error, loading } = useFetch(AirPollution_url);

  if (error) throw error;
  if (loading) return <p>Still Loading!</p>;
  return (
    <Container>
      <h1>Air Pollution Page</h1>
      <hr />
      {data && (
        <div className="mt-5">
          {data.map((item) => (
            <>
              <p>ID: {item.id}</p>
              <p>Place: {item.place}</p>
            </>
          ))}
        </div>
      )}
    </Container>
  );
};

export default AirPollution;
