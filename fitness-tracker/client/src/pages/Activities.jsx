import { useEffect, useState } from 'react';
import API from '@/api';
import '../styles/SharedStyles.css';

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
      setNewActivity({ type: '', duration: '', date: '' });
    } catch (e) {
      alert('Failed to add activity: ' + e.message);
    }
  };

  return (
    <div className="page-container">
      <h2>Manage Activities</h2>
      <form onSubmit={handleSubmit} className="form-box">
        <select
          value={newActivity.type}
          onChange={(e) => setNewActivity({ ...newActivity, type: e.target.value })}
          required
          className="input-field"
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
          className="input-field"
        />
        <input
          type="date"
          value={newActivity.date}
          onChange={(e) => setNewActivity({ ...newActivity, date: e.target.value })}
          required
          className="input-field"
        />
        <button type="submit" className="button-primary">Add Activity</button>
      </form>

      <ul className="list-reset">
        {activities.map((a) => (
          <li key={a._id} className="list-item">
            {a.date}: <strong>{a.type}</strong> – {a.duration} minutes
          </li>
        ))}
      </ul>

      {activities.length === 0 && <p>No activities logged yet.</p>}
    </div>
  );
};

export default Activities;