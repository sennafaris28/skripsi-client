import React from 'react';
// import { Link } from 'react-router-dom';

import Attack from './Attack';

const Home = () => {
  return (
    <div className='container'>
      <h1> Welcome to Rocket !</h1>
      <div className='section'>
        <div className='row'>
          <h3 className='center white-text'>What is Rocket ?</h3>
          <p className='flow-text'>
            Rocket is a web-based application for web application vulnerability
            assessment. Rockets uses the well-known OWASP Zed Attack Proxy as
            its basis for detecting weak points in your web application. Neat,
            isn't it ?
          </p>
        </div>
        <div className='row'>
          <div className='col s12 m4'>
            <div className='card white darken-1 medium'>
              <div className='card-content'>
                <h2 className='center brown-text'>
                  <i className='material-icons'>flash_on</i>
                </h2>
                <h5 className='center'>Speeds up development</h5>
                <p className='light'>
                  Rocket helps web maintainer by removing some of its workload
                  by providing easy-to-use interface for web application
                  security assesment.
                </p>
              </div>
            </div>
          </div>
          <div className='col s12 m4'>
            <div className='card white darken-1 medium'>
              <div className='card-content'>
                <h2 className='center brown-text'>
                  <i className='material-icons'>group</i>
                </h2>
                <h5 className='center'>User Experience Focused</h5>
                <p className='light'>
                  By utilizing elements and principles of Material Design, we
                  were able to create a framework that incorporates components
                  and animations that provide more feedback to users.
                </p>
              </div>
            </div>
          </div>
          <div className='col s12 m4'>
            <div className='card white darken-1 medium'>
              <div className='card-content'>
                <h2 className='center brown-text'>
                  <i className='material-icons'>settings</i>
                </h2>
                <h5 className='center'>Easy to work with</h5>
                <p className='light'>
                  We have provided detailed documentation as well as specific
                  code examples to help new users get started.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='row center'>
          <div className='card horizontal'>
            <div className='card-stacked'>
              <div className='card-content'>
                <p>
                  To use Rocket, you can simply enter your application's URL
                  here
                </p>
              </div>
              <div className='card-action  darken-1'>
                <Attack />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
