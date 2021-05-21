import React from "react";
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
        <Jumbotron fluid className="jumbotron bg-transparent text-white">
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
        </Jumbotron>
        <Row>
          <Col>
            <CardDeck>
              <Card className="card bg-transparent text-white">
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
              </Card>
              <Card className="card bg-transparent text-white">
                {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
                <Card.Body>
                  <Card.Title>Kalkidan Taye</Card.Title>
                  <Card.Text>
                    <a href="https://github.com/KalkidanTaye">Kali's Github</a>
                  </Card.Text>
                  <Card.Text>
                    Contact her by email, kali.taye@gmail.com
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Located in Canada</small>
                </Card.Footer>
              </Card>
              <Card className="card bg-transparent text-white">
                {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
                <Card.Body>
                  <Card.Title>Kapre Mom</Card.Title>
                  <Card.Text>
                    <a href="https://github.com/kapremom">Kapre's Github</a>
                  </Card.Text>
                  <Card.Text>
                    Contact her by email, kapremom@gmail.com
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Located in Virgina, USA</small>
                </Card.Footer>
              </Card>
            </CardDeck>
          </Col>
        </Row>
      </Container>
      s
    </div>
  );
};

export default About;
