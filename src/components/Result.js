import React, { useState } from 'react';
import Axios from 'axios';

// to-do
// ga auto masuk kudu refresh 3x

const Alerts = () => {
  Axios.get(
    'http://localhost:8080/JSON/alert/view/alerts/?baseurl=' +
      localStorage.getItem('URL')
  ).then((response) => {
    console.log(response.data.alerts);
    // map alert array here
  });
  return (
    <div>
      <h2>ALERT</h2>
      {}
    </div>
  );
};

const Result = () => {
  const [statusB, setStatusB] = useState('');
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
        console.log(status);
        if (status == 100) {
          setStatusB(response.data.status);
          console.log('done');

          console.log(statusB);
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
        {statusB ? <Alerts /> : <div>Loading</div>}
        <button className='btn' onClick={() => checkStatus()}>
          Refresh
        </button>
      </div>
    </div>
  );
};

export default Result;
