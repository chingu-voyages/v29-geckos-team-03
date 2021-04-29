import React from 'react'
import { Container, Jumbotron, Card} from 'react-bootstrap'
import DisplayCard from './DisplayCard.js'
import '../index.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';

const Landing = () => {
  return (
    <Container fluid>
      
      <DisplayCard />
     
    </Container>
    
  )
}

export default Landing
