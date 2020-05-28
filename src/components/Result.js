import React from 'react';
import Axios from 'axios';

const Result = () => {
  const checkStatus = () => {
    Axios.get(
      '/JSON/ascan/view/status/?scanId=' + localStorage.getItem('SCAN_ID'),
      {}
    ).then((response) => {
      console.log(response);
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
