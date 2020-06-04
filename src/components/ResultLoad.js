// import React, { useState, useEffect } from 'react';
// import Axios from 'axios';

// // to-do
// // ga auto masuk kudu refresh 3x

// // const Alerts = () => {
// //   const [alert, setAlert] = useState([]);
// //   Axios.get(
// //     'http://localhost:8080/JSON/alert/view/alerts/?baseurl=' +
// //       localStorage.getItem('URL')
// //   )
// //     .then((response) => {
// //       console.log(response.data.alerts);
// //       localStorage.setItem('Alert', response.data.alerts);
// //       setAlert(localStorage.getItem('Alert'));
// //       // console.log(response);
// //       console.log('arlet');
// //       console.log(alert);
// //     })
// //     .catch((error) => {
// //       console.log(error);
// //     });
// //   return (
// //     <div>
// //       <h2>ALERT</h2>
// //       {alert.map((alert, index) => {
// //         return (
// //           <div className='card'>
// //             <div className='card-title'>{alert.name}</div>
// //             <div className='card-content'>{alert.description}</div>
// //           </div>
// //         );
// //       })}
// //     </div>
// //   );
// // };

// const Result = () => {
//   useEffect(() => {
//     Axios.get(
//       'http://localhost:8080/JSON/ascan/view/status/?scanId=' +
//         localStorage.getItem('SCAN_ID'),
//       {}
//     )
//       .then((response) => {
//         console.log('response status :' + response.data.status);
//         const status = response.data.status;
//         localStorage.setItem('status', response.data.status);
//         console.log('status :' + localStorage.getItem('status'));
//         if (localStorage.getItem('status') == 100) {
//           console.log('DONE');
//           Alerts();
//         } else {
//           console.log('LOADING');
//           setInterval(checkStatus(), 2500);
//         }
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);

//   const checkStatus = () => {
//     Axios.get(
//       'http://localhost:8080/JSON/ascan/view/status/?scanId=' +
//         localStorage.getItem('SCAN_ID'),
//       {}
//     ).then((response) => {
//       localStorage.setItem('status', response.data.status);
//     });
//   };

//   return (
//     <div className='card z-depth-3'>
//       <h2 className='card-title'>Result Page</h2>
//       <div className='card-content'>
//         <p>Konten</p>
//         {/* <Alerts /> */}
//         {/* <button className='btn' onClick={() => Alerts()}>
//           Refresh
//         </button> */}
//       </div>
//     </div>
//   );
// };

// export default Result;
