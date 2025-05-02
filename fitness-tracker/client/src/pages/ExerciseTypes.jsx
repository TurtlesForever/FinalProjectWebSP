import { useEffect, useState } from 'react';
import API from '../services/api'; // Adjust if your API file is elsewhere

const ExerciseTypes = () => {
  const [exerciseTypes, setExerciseTypes] = useState([]);
  const [newType, setNewType] = useState({ name: '', category: '' });

  useEffect(() => {
    fetchExerciseTypes();
  }, []);

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
      const res = await API.post('/exercise-types', newType);
      setExerciseTypes([...exerciseTypes, res.data]);
      setNewType({ name: '', category: '' }); // Clear form
    } catch (e) {
      alert('Failed to add exercise type: ' + e.message);
    }
  };

  return (
    <div style={styles.page}>
      <h2>Manage Exercise Types</h2>

      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          placeholder="Name"
          value={newType.name}
          onChange={(e) => setNewType({ ...newType, name: e.target.value })}
          required
          style={styles.input}
        />
        <input
          type="text"
          placeholder="Category"
          value={newType.category}
          onChange={(e) => setNewType({ ...newType, category: e.target.value })}
          required
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Add Exercise Type</button>
      </form>

      <ul style={styles.ul}>
        {exerciseTypes.map((type) => (
          <li key={type._id} style={styles.li}>
            <strong>{type.name}</strong> – Category: {type.category}
          </li>
        ))}
      </ul>

      {exerciseTypes.length === 0 && <p>No exercise types defined yet.</p>}
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
    backgroundColor: '#4CAF50',
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

export default ExerciseTypes;