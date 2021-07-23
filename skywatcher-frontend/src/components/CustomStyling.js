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
  font-size: ${(props) => props.size || "1.3em"};
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
  padding: ${(props) => props.padding || "5%"};
  margin-top: 5vh;
  background-color: ${(props) => props.bgcolor || "rgba(0, 0, 0, 0.4)"};
  color: white;
  height: ${(props) => props.height || "30vh"};
  text-align: center;
  overflow: hidden;
`;

export const StyledCardBody = styled(Card.Body)`
  overflow-x: auto;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: 0;
  ::-webkit-scrollbar {
    width: 0.2rem;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 0.2rem;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.2);
    border-radius: 1rem;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: rgba(0, 0, 0, 0.2);
  }
`;
// Current Weather Card Specific Styling
export const CWIcon = styled.img`
  width: 60%;
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

export const SubUnit = styled.sub`
  font-size: 0.5em;
`;
