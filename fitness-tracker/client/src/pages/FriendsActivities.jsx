import React from 'react';
import '../styles/SharedStyles.css';

const FriendsActivities = () => {
  const friendsActivities = [
    { name: 'Alice', activity: 'Running', duration: 30 },
    { name: 'Bob', activity: 'Yoga', duration: 45 },
    { name: 'Charlie', activity: 'Cycling', duration: 60 },
  ];

  return (
    <div className="page-container">
      <h2>Friends' Activities</h2>
      <ul className="list-reset">
        {friendsActivities.map((fa, idx) => (
          <li key={idx} className="list-item">
            <strong>{fa.name}</strong>: {fa.activity} for {fa.duration} minutes
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FriendsActivities;