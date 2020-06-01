import React from 'react';
import Axios from 'axios';
import { useHistory } from 'react-router-dom';

const Alerts = () => {
  return (
    <div>
      <h2>ALERT</h2>
    </div>
  );
};

const Result = () => {
  const history = useHistory();
  const checkStatus = () => {
    Axios.get(
      'http://localhost:8080/JSON/ascan/view/status/?scanId=' +
        localStorage.getItem('SCAN_ID'),
      {}
    ).then((response) => {
      // console.log(response);
      const scanID = response;
      Axios.get(
        'http://localhost:8080/JSON/ascan/view/status/?scanId=' + scanID
      ).then((response) => {
        localStorage.setItem('status', response);
        console.log(response.data.status);
        const status = response.data.status;
        if (status == 100) {
          console.log('done');
          history.push('/result');
        } else {
          return (
            <div>
              <h2>Loading . . .</h2>
            </div>
          );
        }
      });
    });
  };

  return (
    <div className='card z-depth-3'>
      <h2 className='card-title'>Result Page</h2>
      <div className='card-content'>
        <p>Konten</p>
        <button className='btn' onClick={() => checkStatus()}>
          Refresh
        </button>
      </div>
    </div>
  );
};

export default Result;
