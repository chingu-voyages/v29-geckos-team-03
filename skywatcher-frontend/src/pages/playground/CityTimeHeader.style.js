import styled from "styled-components";
import img from "../../assets/manhattan-bridge.jpg";

export const CTContainer = styled.div`
  background-image: url(${img});
  background-position: left top;
  background-repeat: no-repeat;
  height: 100vh;
`;
export const CTHeader = styled.header`
  border: 1em;
  padding: 1rem;
  margin: 1rem 0;
  background-color: rgba(20, 20, 30, 0.5);
  border-radius: 0.5rem;
  vertical-align: center;
  color: white;
`;
export const CTHeaderTitle = styled.h2`
  font-size: 2em;
`;
export const CTHeaderTime = styled.p`
  font-size: 1em;
  color: #eef;
  font-style: italic;
`;
export const CTHeaderDaysButton = styled.button`
  border: 1em;
  padding: 0.2rem 0.5rem;
  margin: 0 0.2rem;
  width: 10%;
  color: rgba(200, 200, 200, 0.8);
  background-color: rgba(0, 0, 0, 0.4);
  font-size: 1rem;
  &:first-of-type {
    color: #eef;
  }
`;
