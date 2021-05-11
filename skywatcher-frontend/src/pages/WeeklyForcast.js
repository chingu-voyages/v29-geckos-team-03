import React from 'react'
import {Card, Row, Col} from 'react-bootstrap'
import '../index.css';

class WeeklyForcast extends React.Component {
  state = {
      loading:true,
      day:null,
      weatherIcon: null,
      temperature:null,
  }

  async componentDidMount(){
    const api_url = `https://api.openweathermap.org/data/2.5/forecast?q=new%20york&cnt=40&units=metric&appid=0aeeb80f1822726609f7a5570cc0992c`
    const response = await fetch(api_url);
    const data = await response.json()

    for (var i = 1; i < 6; i++) {
      
        this.setState({ day: data.list[i], loading: false})
        this.setState({ weatherIcon: data.list[i].weather[0].icon, loading: false})
        this.setState({ temperature: data.list[i].main.temp, loading: false})
    

    // console.log(data.list[i].main.temp)
    // console.log(data.list[i].dt_txt)

    console.log(data)
  }
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
                    
                  </Row>

                  <Row xs={2} md={4} lg={6}>
                    <Col><img src={`http://openweathermap.org/img/w/${this.state.weatherIcon}.png` } alt =""/></Col>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                  </Row>

                  <Row xs={2} md={4} lg={6}>
                    <Col>{this.state.temperature}</Col>
                    <Col>15</Col>
                    <Col>17</Col>
                    <Col>14</Col>
                    <Col>14</Col>
                  </Row>
              
                </Card.Body> 

            </div>


            
        
          
      )
  }
}

export default WeeklyForcast
