import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Axios from 'axios';

const Loading = () => {
  const [statusB, setStatusB] = useState('');
  const history = useHistory();

  const checkStatus = () => {
    localStorage.setItem('status', 0);
    while (localStorage.getItem('status') != 100) {
      Axios.get(
        'http://localhost:8080/JSON/ascan/view/status/?scanId=' +
          localStorage.getItem('SCAN_ID'),
        {}
      ).then((response) => {
        console.log('response status : ' + response.data.status);
        localStorage.setItem('status', response.data.status);
        if (response.data.status == 100) {
          setTimeout(history.push('/result'), 5000);
        } else {
          console.log('loading');
          localStorage.setItem('status', response.data.status);
        }
      });
    }
  };

  //   useEffect(() => {
  //     checkStatus();
  //   });

  return (
    <div className='card z-depth-3'>
      <h2 className='card-title'>LOADING</h2>
      <button onClick={() => checkStatus()}>REFRESH</button>
    </div>
  );
};

export default Loading;
