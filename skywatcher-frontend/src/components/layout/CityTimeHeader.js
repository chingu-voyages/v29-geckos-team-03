import React, { useState, useEffect } from "react";
import { Col, Row, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

import { distinctApiDays } from "../../services/DateHelpers";
import {
  CTHeaderDaysButton,
  CTHeader,
  CTHeaderTitle,
  CTHeaderTime,
  CTFormControl,
} from "../CustomStyling";
import { useFetchWeatherForecast } from "../../services/ApiHelpers";

const CityTimeHeader = ({ city, setCity }) => {
  const [currentTime, setCurrentTime] = useState(Date());
  const [editState, setEditState] = useState(false);
  const [cityName, setCityName] = useState(city);

  const { data, error, loading } = useFetchWeatherForecast(city);

  useEffect(() => {
    let timer = setInterval(() => setCurrentTime(Date()), 1000);
    return () => {
      clearInterval(timer);
    };
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setEditState(!editState);
    setCity(e.target.value);
  };

  if (loading) return <p>Still Loading!</p>;
  if (error) throw error;
  return (
    <CTHeader as={Row}>
      <Col md={6} xs={12}>
        <CTHeaderTitle className="mt-3 mb-2">
          {!editState && (
            <FontAwesomeIcon
              icon={faEdit}
              style={{
                fontSize: ".8rem",
                marginBottom: ".8rem",
                marginRight: ".8rem",
              }}
              onClick={() => setEditState(true)}
            />
          )}
          {editState ? (
            <Form onSubmit={handleSubmit}>
              <CTFormControl
                value={cityName}
                onChange={(e) => setCityName(e.target.value)}
              />
            </Form>
          ) : (
            cityName
          )}
        </CTHeaderTitle>
      </Col>
      <Col md={6} xs={12}>
        <Row className="justify-content-center">
          <CTHeaderTime>{currentTime}</CTHeaderTime>
        </Row>
        <Row className="justify-content-center">
          {distinctApiDays(data.list).map((dt, idx) => (
            <CTHeaderDaysButton key={`${dt}-${idx}-button`}>
              {dt}
            </CTHeaderDaysButton>
          ))}
        </Row>
      </Col>
    </CTHeader>
  );
};

export default CityTimeHeader;
