import styled from 'styled-components'
import img from '../../assets/manhattan-bridge.jpg'

export const CTContainer = styled.div`
  background-image: url(${img});
  background-position: left top;
  background-repeat: no-repeat;
  height: 100vh;
`
export const CTHeader = styled.header`
  border: 1em;
  padding: 1rem;
  margin: 1rem 0;
  background-color: rgba(20,20,30,.5);
  border-radius: .5rem;
  vertical-align: center;
`

export const CTHeaderTitle = styled.h2`
  color: white;
  font-size: 1.5em;
`

export const CTHeaderDaysButton = styled.button`
  border: 1em;
  font-size: 1em;
`