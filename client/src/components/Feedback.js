// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// function Feedback() {
//   const [name, setName] = useState('');
//   const [contact, setContact] = useState('');
//   const navigate = useNavigate();

//   const handleFormSubmit = async () => {
//     try {
//       const watchedVideos = ["Video 1: Introduction", "Video 2: Concepts", "Video 3: Application"];
//       console.log('Submitting data:', { name, contact, watchedVideos }); // Debugging line
//       const response = await axios.post('http://localhost:5000/api/users/saveCompletion', { name, contact, watchedVideos });
//       console.log('Response:', response.data);
//       alert('Thank you for completing the training!');
//       navigate('/success');
//     } catch (error) {
//       console.error('Error saving data:', error.response ? error.response.data : error.message);
//       alert('There was an error saving your data.');
//     }
//   };

//   return (
//     <div style={{ padding: '20px' }}>
//       <h2>Feedback</h2>
//       <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your Name" />
//       <input type="text" value={contact} onChange={(e) => setContact(e.target.value)} placeholder="Your Contact" />
//       <button onClick={handleFormSubmit} style={{ marginTop: '20px', padding: '10px 20px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
//         Submit
//       </button>
//     </div>
//   );
// }

// export default Feedback;

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Feedback() {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [explanation, setExplanation] = useState(''); // Add state for explanation
  const navigate = useNavigate();

  const handleFormSubmit = async () => {
    try {
      const watchedVideos = ["Video 1: Introduction", "Video 2: Concepts", "Video 3: Application"];
      console.log('Submitting data:', { name, contact, watchedVideos, explanation }); // Debugging line
      const response = await axios.post('http://localhost:5000/api/users/saveCompletion', { name, contact, watchedVideos, explanation });
      console.log('Response:', response.data);
      alert('Thank you for completing the training!');
      navigate('/success');
    } catch (error) {
      console.error('Error saving data:', error.response ? error.response.data : error.message);
      alert('There was an error saving your data.');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Feedback</h2>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your Name" />
      <input type="text" value={contact} onChange={(e) => setContact(e.target.value)} placeholder="Your Contact" />
      <textarea value={explanation} onChange={(e) => setExplanation(e.target.value)} placeholder="What did you learn?" rows="4" style={{ width: '100%', marginTop: '10px' }} />
      <button onClick={handleFormSubmit} style={{ marginTop: '20px', padding: '10px 20px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
        Submit
      </button>
    </div>
  );
}

export default Feedback;

