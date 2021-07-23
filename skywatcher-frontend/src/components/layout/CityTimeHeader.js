import React, { useState, useEffect } from "react";
import {
  Col,
  Row,
  Form,
  InputGroup,
  Button,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import {
  CTHeader,
  CTHeaderTitle,
  CTHeaderTime,
  CTFormControl,
} from "../CustomStyling";

const CityTimeHeader = ({ city, setCity }) => {
  const [currentTime, setCurrentTime] = useState(Date());
  const [editState, setEditState] = useState(false);
  const [cityName, setCityName] = useState(city);
  const [newLat, setNewLat] = useState(null);
  const [newLon, setNewLon] = useState(null);

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

  const outputLocation = (pos) => {
    let crd = pos.coords;

    setNewLat(crd.latitude);
    setNewLon(crd.longitude);

    console.log("Your current position is:");
    console.log(`Latitude : ${newLat}`);
    console.log(`Longitude: ${newLon}`);
    console.log(`More or less ${crd.accuracy} meters.`);
  };
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(outputLocation);
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  };

  return (
    <CTHeader as={Row}>
      <Col md={4} xs={12}>
        <CTHeaderTitle className="mt-3 mb-2">
          {editState ? (
            <Form onSubmit={handleSubmit}>
              <InputGroup>
                <InputGroup.Prepend>
                  <OverlayTrigger
                    overlay={
                      <Tooltip>Geolocation functionality pending!!</Tooltip>
                    }
                  >
                    <span className="d-inline-block">
                      <Button
                        variant="secondary"
                        disabled
                        style={{ pointerEvents: "none" }}
                      >
                        <FontAwesomeIcon icon={faMapMarkerAlt} />
                      </Button>
                    </span>
                  </OverlayTrigger>
                </InputGroup.Prepend>
                <CTFormControl
                  value={cityName}
                  onChange={(e) => setCityName(e.target.value)}
                />
                <InputGroup.Append>
                  <Button variant="secondary" type="submit">
                    Submit
                  </Button>
                </InputGroup.Append>
              </InputGroup>
            </Form>
          ) : (
            <Row>
              {/* <FontAwesomeIcon
                icon={faEdit}
                style={{
                  fontSize: ".8rem",
                  marginBottom: ".8rem",
                  marginRight: ".8rem",
                }}
                onClick={() => setEditState(true)}
              /> */}
              <h3>{cityName}</h3>
            </Row>
          )}
        </CTHeaderTitle>
      </Col>
      <Col md={8} xs={12}>
        <Row className="justify-content-center">
          <CTHeaderTime className="mt-3">{currentTime}</CTHeaderTime>
        </Row>
      </Col>
    </CTHeader>
  );
};

export default CityTimeHeader;
