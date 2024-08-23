// new file `SuccessPage.js`

import React from 'react';
import { useNavigate } from 'react-router-dom';

function SuccessPage() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h2>Successfully Completed Training</h2>
      <button onClick={() => navigate('/dashboard')} style={{ padding: '10px 20px', marginTop: '20px' }}>
        Go to Dashboard
      </button>
    </div>
  );
}

export default SuccessPage;
