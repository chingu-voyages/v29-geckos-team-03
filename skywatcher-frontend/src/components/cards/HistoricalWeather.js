import React, { useState } from "react";
import {
  Button,
  Row,
  Col,
  Form,
  FormControl,
  InputGroup,
} from "react-bootstrap";
// import { useFetchHistoricalWeather } from "../../services/ApiHelpers";
import { CardTitle, StyledCard } from "../CustomStyling";

const HistoricalWeather = ({ lat, lon, unit }) => {
  const currentTime = parseInt(Date.now() / 1000);
  const [dateTime, setDateTime] = useState(currentTime);
  // const { data, error, loading } = useFetchHistoricalWeather(
  //   lat,
  //   lon,
  //   dateTime,
  //   unit
  // );

  // if (error) throw error;
  // if (loading) return <p>Still Loading!</p>;
  return (
    <StyledCard>
      <CardTitle className="mt-auto mb-auto">
        {" "}
        Upcoming Historical Weather Feature!
      </CardTitle>
      {/* <Form>
        <Form.Group as={Row}>
          <Form.Label column sm="3">
            Date
          </Form.Label>
          <Col sm="9">
            <InputGroup>
              <InputGroup.Prepend>
                <Button variant="secondary">&lt;</Button>
              </InputGroup.Prepend>
              <FormControl as="select">
                <option>8</option>
              </FormControl>
              <InputGroup.Append>
                <Button variant="secondary">&gt;</Button>
              </InputGroup.Append>
            </InputGroup>
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column sm="3">
            Time
          </Form.Label>
          <Col sm="9">
            <InputGroup>
              <FormControl as="select">
                <option>8</option>
              </FormControl>
              <FormControl as="select">
                <option>00</option>
              </FormControl>
              <FormControl as="select">
                <option>AM</option>
                <option>PM</option>
              </FormControl>
            </InputGroup>
          </Col>
        </Form.Group>
        <Button variant="secondary" block>
          Fetch Data
        </Button>
      </Form> */}
    </StyledCard>
  );
};

export default HistoricalWeather;
