import { useEffect, useState } from 'react';
import API from '../services/api';

const Activities = () => {
  const [activities, setActivities] = useState([]);
  const [exerciseTypes, setExerciseTypes] = useState([]);
  const [newActivity, setNewActivity] = useState({
    type: '',
    duration: '',
    date: '',
  });

  useEffect(() => {
    fetchActivities();
    fetchExerciseTypes();
  }, []);

  const fetchActivities = async () => {
    try {
      const res = await API.get('/activities');
      setActivities(res.data);
    } catch (e) {
      alert('Failed to fetch activities: ' + e.message);
    }
  };

  const fetchExerciseTypes = async () => {
    try {
      const res = await API.get('/exercise-types');
      setExerciseTypes(res.data);
    } catch (e) {
      alert('Failed to fetch exercise types: ' + e.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post('/activities', newActivity);
      setActivities([...activities, res.data]);
      setNewActivity({ type: '', duration: '', date: '' }); // Clear form
    } catch (e) {
      alert('Failed to add activity: ' + e.message);
    }
  };

  return (
    <div style={styles.page}>
      <h2>Manage Activities</h2>

      <form onSubmit={handleSubmit} style={styles.form}>
        <select
          value={newActivity.type}
          onChange={(e) => setNewActivity({ ...newActivity, type: e.target.value })}
          required
          style={styles.input}
        >
          <option value="" disabled>Select Exercise Type</option>
          {exerciseTypes.map((et) => (
            <option key={et._id} value={et.name}>{et.name}</option>
          ))}
        </select>

        <input
          type="number"
          placeholder="Duration (minutes)"
          value={newActivity.duration}
          onChange={(e) => setNewActivity({ ...newActivity, duration: e.target.value })}
          required
          style={styles.input}
        />

        <input
          type="date"
          value={newActivity.date}
          onChange={(e) => setNewActivity({ ...newActivity, date: e.target.value })}
          required
          style={styles.input}
        />

        <button type="submit" style={styles.button}>Add Activity</button>
      </form>

      <ul style={styles.ul}>
        {activities.map((a) => (
          <li key={a._id} style={styles.li}>
            {a.date}: <strong>{a.type}</strong> – {a.duration} minutes
          </li>
        ))}
      </ul>

      {activities.length === 0 && <p>No activities logged yet.</p>}
    </div>
  );
};

const styles = {
  page: {
    margin: '20px',
  },
  form: {
    marginBottom: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    maxWidth: '300px',
  },
  input: {
    padding: '8px',
    fontSize: '16px',
  },
  button: {
    padding: '8px',
    fontSize: '16px',
    backgroundColor: '#2196F3',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
  },
  ul: {
    listStyleType: 'none',
    padding: 0,
  },
  li: {
    marginBottom: '10px',
  },
};

export default Activities;