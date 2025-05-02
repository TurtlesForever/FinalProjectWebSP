import { useEffect, useState } from 'react';
import { fetchFriends } from '@/services/userStore'; // You’ll need to implement or adjust this service function

const FriendsActivities = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    const loadFriends = async () => {
      try {
        const data = await fetchFriends();
        setFriends(data);
      } catch (error) {
        console.error('Failed to fetch friends:', error);
      }
    };

    loadFriends();
  }, []);

  return (
    <div>
      <h2>Your Friends' Activities</h2>
      {friends.length ? (
        friends.map((friend) => (
          <div key={friend.id} style={styles.friendBlock}>
            <h3>{friend.username}</h3>
            {friend.activities?.length ? (
              friend.activities.map((activity, index) => (
                <div key={index} style={styles.activityEntry}>
                  <p>{activity.type} - {activity.duration} mins</p>
                </div>
              ))
            ) : (
              <p>No activities logged.</p>
            )}
          </div>
        ))
      ) : (
        <p>Loading or no friends to show.</p>
      )}
    </div>
  );
};

const styles = {
  friendBlock: {
    marginBottom: '1.5rem',
    padding: '1rem',
    backgroundColor: '#f6f6f6',
    borderRadius: '8px',
  },
  activityEntry: {
    marginLeft: '1rem',
  },
};

export default FriendsActivities;