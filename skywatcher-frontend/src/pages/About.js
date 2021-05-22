import React from "react";
import { StyledCard } from "../components/CustomStyling";
import {
  Container,
  Row,
  Col,
  Jumbotron,
  Card,
  CardDeck,
} from "react-bootstrap";

const About = () => {
  return (
    <div className="About">
      <Container fluid="md">
        <StyledCard>
          <Container>
            <h1>About Us</h1>
            <p>
              A of group of Developers had a chance to come together as a team
              and created a New York based weather application called,
              SkyWalker. <br />
              Skywalker was created using
              <a href="https://openweathermap.org/">OpenWeatherMap</a> API data.
            </p>
          </Container>
        </StyledCard>
        <Row>
          <Col>
            <CardDeck>
              <StyledCard>
                {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
                <Card.Body>
                  <Card.Title>Eddy Banks</Card.Title>
                  <Card.Text>
                    <a href="https://github.com/eddybanks">
                      Visit Eddy's Github
                    </a>
                  </Card.Text>
                  <Card.Text>
                    Contact him by email, eddy.devv@gmail.com
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Located in Canada</small>
                </Card.Footer>
              </StyledCard>
              <StyledCard>
                {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
                <Card.Body>
                  <Card.Title>Kalkidan Taye</Card.Title>
                  <Card.Text>
                    <a href="https://github.com/KalkidanTaye">
                      Visit Kali's Github
                    </a>
                  </Card.Text>
                  <Card.Text>
                    Contact her by email, kali.taye@gmail.com
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Located in Canada</small>
                </Card.Footer>
              </StyledCard>
              <StyledCard>
                {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
                <Card.Body>
                  <Card.Title>Kapre Mom</Card.Title>
                  <Card.Text>
                    <a href="https://github.com/kapremom">
                      Visit Kapre's Github
                    </a>
                  </Card.Text>
                  <Card.Text>
                    Contact her by email, kapremom@gmail.com
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Located in Virgina, USA</small>
                </Card.Footer>
              </StyledCard>
            </CardDeck>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
