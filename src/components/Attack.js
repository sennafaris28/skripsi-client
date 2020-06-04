import React, { useState } from 'react';
import Axios from 'axios';
import { useHistory } from 'react-router-dom';

const Attack = () => {
  const [url, setUrl] = useState('');
  const history = useHistory();

  const postData = () => {
    console.log(url);
    localStorage.setItem('URL', url);
    Axios.get('http://localhost:8080/JSON/spider/action/scan/?url=' + url)
      .then((response) => {
        console.log('Spider :', response);
        console.log(response.data.scan);
        setTimeout(aScan(), 3000);
      })
      .catch((errors) => {
        console.log(errors);
      });
  };

  const aScan = () => {
    Axios.get('http://localhost:8080/JSON/ascan/action/scan/?url=' + url)
      .then((response) => {
        console.log('Active :', response);
        localStorage.setItem('SCAN_ID', response.data.scan);
        localStorage.setItem('URL', url);
        // history.push('/result');
        history.push('/loading');
      })
      .catch((error) => {
        console.log(error);
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
