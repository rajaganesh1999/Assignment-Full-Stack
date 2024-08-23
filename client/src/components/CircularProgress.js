// client/src/components/CircularProgress.js
import React from 'react';

function CircularProgress({ progress }) {
  return (
    <div style={{ position: 'absolute', top: '10px', right: '10px' }}>
      <svg width="60" height="60" viewBox="0 0 36 36">
        <path
          style={{ fill: 'none', stroke: '#ddd', strokeWidth: 3 }}
          d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0-31.831"
        />
        <path
          style={{ fill: 'none', stroke: '#4CAF50', strokeWidth: 3, strokeDasharray: `${progress}, 100` }}
          d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0-31.831"
        />
        <text x="18" y="22" fontSize="8" textAnchor="middle" fill="#333">
          {Math.round(progress)}%
        </text>
      </svg>
    </div>
  );
}

export default CircularProgress;