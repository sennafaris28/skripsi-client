import React, { useState } from 'react';
import Axios from 'axios';
import { useHistory } from 'react-router-dom';

const Attack = () => {
  const [url, setUrl] = useState('');
  const history = useHistory();

  const postData = () => {
    console.log(url);
    localStorage.setItem('URL', url);
    Axios.all([
      Axios.get('/JSON/spider/action/scan/?url=' + url),
      Axios.get('/JSON/ascan/action/scan/?url=' + url),
    ])
      .then((responseArr) => {
        console.log('Spider :', responseArr[0]);
        console.log('Active :', responseArr[1]);
        console.log(responseArr[0].data.scan);
        localStorage.setItem('SCAN_ID', responseArr[0].data.scan);
        history.push('/result');
      })
      .catch((errors) => {
        console.log(errors);
      });
  };

  return (
    <div className='container'>
      <div className='row' style={{ marginTop: '25px' }}>
        <div className='card deep-orange white-text z-depth-3'>
          <div className='card-content'>
            <div className='row'>
              <p className='flow-text'>
                You can enter the target web application url here. Rocket then
                will commence active and passive scan on the target to scan for
                any vulnerabilities.
              </p>
            </div>
            <div className='row'>
              <input
                className='input-field'
                type='text'
                placeholder='Insert target url here'
                value={url}
                onChange={(event) => {
                  event.preventDefault();
                  setUrl(event.target.value);
                }}
              />
            </div>
            <button
              className='btn waves-effect amber darken-1'
              onClick={() => postData()}
            >
              Attack<i className='material-icons right'>send</i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Attack;
