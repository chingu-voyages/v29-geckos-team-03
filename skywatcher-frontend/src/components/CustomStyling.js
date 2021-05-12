import { Card, FormControl } from "react-bootstrap";
import styled from "styled-components";

// CityTimeHeader styling
export const CTHeader = styled.header`
  border: 1em;
  padding: 1rem;
  margin-top: 5vh;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 0.5rem;
  vertical-align: center;
  color: white;
`;
export const CTHeaderTitle = styled.h2`
  font-size: 2em;
`;
export const CTFormControl = styled(FormControl)`
  color: white;
  background-color: rgba(0, 0, 0, 0.3);

  &:focus {
    color: white;
    background-color: rgba(0, 0, 0, 0.3);
  }
`;
export const CTHeaderTime = styled.p`
  font-size: 1em;
  color: #eef;
  font-style: italic;
`;
export const CTHeaderDaysButton = styled.button`
  border: 1em;
  padding: 0.2rem 0.5rem;
  margin: 0.1rem 0.2rem;
  color: rgba(200, 200, 200, 0.8);
  background-color: rgba(0, 0, 0, 0.4);
  font-size: 0.9rem;
  &:first-of-type {
    color: #eef;
  }
`;

// Generic Cards Styling
export const StyledCard = styled(Card)`
  padding: 5%;
  margin-top: 5vh;
  background-color: rgba(0, 0, 0, 0.4);
  color: white;
  min-height: ${(props) => props.min_height || "30vh"};
  text-align: center;
`;

// Current Weather Card Specific Styling
export const CWIcon = styled.img`
  margin: 15% 0 10% 0;
  width: 50%;
`;
export const CWInfo = styled.div`
  font-size: 1em;
`;
export const CardTitle = styled.h4`
  margin-bottom: 5%;
`;
export const StyledFooter = styled.footer`
  background: rgba(0, 0, 0, 0.7);
  text-align: center;
  bottom: 0;
  left: 0;
  height: 5%;
  width: 100vw;
  color: white;
  position: fixed;
  font-size: 1rem;
  padding: 1%;
`;
