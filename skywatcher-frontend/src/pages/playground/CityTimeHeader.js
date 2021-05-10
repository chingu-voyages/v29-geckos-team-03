import React, { useState, useEffect } from "react";
import { Col, FormControl, Row, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

import { distinctApiDays } from "../../services/DateHelpers";
import {
  CTHeaderDaysButton,
  CTHeader,
  CTHeaderTitle,
  CTHeaderTime,
} from "./CityTimeHeader.style";

const LandingHeader = ({ city, list }) => {
  const [currentTime, setCurrentTime] = useState(Date());
  const [editState, setEditState] = useState(false);

  useEffect(() => {
    let timer = setInterval(() => setCurrentTime(Date()), 1000);
    return () => {
      clearInterval(timer);
    };
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setEditState(!editState);
  };

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
              <FormControl
                value={city}
                onChange={(e) => e.target.value}
                style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
              />
            </Form>
          ) : (
            city.name
          )}
        </CTHeaderTitle>
      </Col>
      <Col md={6} xs={12}>
        <Row className="justify-content-center">
          <CTHeaderTime>{currentTime}</CTHeaderTime>
        </Row>
        <Row className="justify-content-center">
          {distinctApiDays(list).map((dt, idx) => (
            <CTHeaderDaysButton key={`${dt}-${idx}-button`}>
              {dt}
            </CTHeaderDaysButton>
          ))}
        </Row>
      </Col>
    </CTHeader>
  );
};

export default LandingHeader;
