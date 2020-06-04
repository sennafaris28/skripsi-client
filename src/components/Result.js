import React, { Component } from 'react';
import Axios from 'axios';

class Result extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alerts: [],
    };
  }

  componentDidMount() {
    Axios.get(
      'http://localhost:8080/JSON/alert/view/alerts/?baseurl=' +
        localStorage.getItem('URL')
    )
      .then((response) => {
        console.log(response);
        const alertList = response.data.alerts;
        this.setState({ alerts: alertList });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <h2>Alert</h2>
        {this.state.alerts.map((alert, index) => (
          <div className='card' key={index}>
            <div className='card-title'>{alert.name}</div>
            <div className='card-content'>Severance : {alert.confidence}</div>
            <div className='card-content'>
              Description : {alert.description}
            </div>
            <div className='card-content'>Vulnerable URL : {alert.url}</div>
          </div>
        ))}
      </div>
    );
  }
}

export default Result;
