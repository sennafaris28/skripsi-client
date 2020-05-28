import React, { useState } from 'react';
import Axios from 'axios';

const Attack = () => {
  const [url, setUrl] = useState('');

  const postData = () => {
    Axios.get(
      'http://localhost:6969/JSON/spider/action/scan/?url=https://scele.ui.ac.id',
      {}
    )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h2>Attack Page</h2>
      <input
        type='text'
        value={url}
        onChange={(event) => {
          event.preventDefault();
          setUrl(event.target.value);
        }}
      />
      <button onClick={() => postData()}>Attack</button>
    </div>
  );
};

export default Attack;
