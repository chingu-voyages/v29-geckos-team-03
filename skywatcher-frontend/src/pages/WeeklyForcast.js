import React from 'react'
import { Container, Jumbotron, Card, Row, Col} from 'react-bootstrap'
import '../index.css';

class WeeklyForcast extends React.Component {
  state = {
      loading:true,
      day:null,
      weatherIcon: null,
      temperature:null,
  }

  async componentDidMount(){
    const api_url = `https://api.openweathermap.org/data/2.5/forecast?q=new%20york&cnt=6&units=metric&appid=0aeeb80f1822726609f7a5570cc0992c`
    const response = await fetch(api_url);
    const data = await response.json()
    this.setState({ day: data.list[0], loading: false})
    this.setState({ weatherIcon: data.list[0].weather[0].icon, loading: false})
    // this.setState({ temperature: data.list[0], loading: false})

    console.log(data.list[0].main.temp)
    console.log(data.list[0].dt_txt)

    console.log(data.list[0])
  }

  render(){

    if(this.state.loading){
        return <div>...Loading</div>
    }
    if(this.state.main){
        return <div>Sorry Didn't find Weather </div>
    }
      return(
         
            <div className="weekly-weather ">
                <Card.Body>
                  <Row xs={2} md={4} lg={6}>
                    <Col>{this.state.day.dt_txt}</Col>
                    <Col>Day</Col>
                    <Col>Day</Col>
                    <Col>Day</Col>
                    <Col>Day</Col>
                    <Col>Day</Col>
                  </Row>

                  <Row xs={2} md={4} lg={6}>
                    <Col><img src={`http://openweathermap.org/img/w/${this.state.weatherIcon}.png`}/></Col>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                  </Row>

                  <Row xs={2} md={4} lg={6}>
                    {/* <Col>{this.state.temperature.main.temp}</Col> */}
                    <Col>15</Col>
                    <Col>17</Col>
                    <Col>14</Col>
                    <Col>14</Col>
                    <Col>16</Col>
                  </Row>
              
                </Card.Body> 

            </div>


            
        
          
      )
  }
}

export default WeeklyForcast
