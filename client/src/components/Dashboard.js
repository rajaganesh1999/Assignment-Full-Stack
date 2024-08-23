// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import videos from '../data/videos';
// import '../App.css';

// function Dashboard() {
//   const navigate = useNavigate();

//   const handleStartLearning = () => {
//     console.log('Start Learning button clicked');
//     navigate('/video/1');
//   };

//   return (
//     <div style={containerStyle}>
//       <h1 className='traintext'>Welcome To <br/>Training Module Video Library</h1>
      
//       <div>
//         <h2>Training Videos</h2>
//         <ul>
//           {videos.map((video) => (
//             <li key={video.order} style={{ marginBottom: '20px' }}>
//               <div style={{ position: 'relative', display: 'inline-block' }}>
//                 <h3>{video.title}</h3>
//               </div>
//             </li>
//           ))}
//         </ul>
//       </div>

//       <button onClick={handleStartLearning} style={buttonStyle}>
//         Start Learning
//       </button>
//     </div>
//   );
// }

// const containerStyle = {
//   display: 'flex',
//   flexDirection: 'column',
//   alignItems: 'center',
//   justifyContent: 'center',
//   height: '100vh', // Full viewport height
//   textAlign: 'center',
// };

// const buttonStyle = {
//   marginTop: '20px',
//   padding: '10px 20px',
//   backgroundColor: '#4CAF50',
//   color: 'white',
//   border: 'none',
//   borderRadius: '5px',
//   cursor: 'pointer',
// };

// export default Dashboard;

// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import videos from '../data/videos';
// import '../App.css';

// function Dashboard() {
//   const navigate = useNavigate();

//   const handleStartLearning = () => {
//     console.log('Start Learning button clicked');
//     navigate('/video/1');
//   };

//   return (
//     <div style={containerStyle}>
//       <h1 className='traintext'>Welcome To <br/>Training Module Video Library</h1>
//       <button onClick={handleStartLearning} style={buttonStyle}>
//         Start Learning
//       </button>
//     </div>
//   );
// }

// const containerStyle = {
//   display: 'flex',
//   flexDirection: 'column',
//   alignItems: 'center',
//   justifyContent: 'center',
//   height: '100vh',
//   textAlign: 'center',
// };

// const buttonStyle = {
//   marginTop: '20px',
//   padding: '10px 20px',
//   backgroundColor: '#4CAF50',
//   color: 'white',
//   border: 'none',
//   borderRadius: '5px',
//   cursor: 'pointer',
// };

// export default Dashboard;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

function Dashboard() {
  const navigate = useNavigate();

  const handleStartLearning = () => {
    console.log('Start Learning button clicked');
    navigate('/video/1');
  };

  return (
    <div style={containerStyle}>
      <h1 className='traintext'>Welcome To <br/>Training Module Video Library</h1>
      <button onClick={handleStartLearning} style={buttonStyle}>
        Start Learning
      </button>
    </div>
  );
}

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  textAlign: 'center',
};

const buttonStyle = {
  marginTop: '20px',
  padding: '10px 20px',
  backgroundColor: '#4CAF50',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

export default Dashboard;

