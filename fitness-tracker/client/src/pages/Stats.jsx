import React from 'react';
import '../styles/SharedStyles.css';

const Stats = () => {
  const stats = {
    totalActivities: 8,
    totalDuration: 220,
    mostFrequent: 'Running',
  };

  return (
    <div className="page-container">
      <h2>Your Stats</h2>
      <p><strong>Total Activities:</strong> {stats.totalActivities}</p>
      <p><strong>Total Time:</strong> {stats.totalDuration} minutes</p>
      <p><strong>Most Frequent Activity:</strong> {stats.mostFrequent}</p>
    </div>
  );
};

export default Stats;