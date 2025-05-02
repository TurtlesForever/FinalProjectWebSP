import { useEffect, useState } from 'react';
import API from '@../api';
import '../styles/SharedStyles.css';

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
      setNewType({ name: '', category: '' });
    } catch (e) {
      alert('Failed to add exercise type: ' + e.message);
    }
  };

  return (
    <div className="page-container">
      <h2>Manage Exercise Types</h2>
      <form onSubmit={handleSubmit} className="form-box">
        <input
          type="text"
          placeholder="Name"
          value={newType.name}
          onChange={(e) => setNewType({ ...newType, name: e.target.value })}
          required
          className="input-field"
        />
        <input
          type="text"
          placeholder="Category"
          value={newType.category}
          onChange={(e) => setNewType({ ...newType, category: e.target.value })}
          required
          className="input-field"
        />
        <button type="submit" className="button-primary">Add Exercise Type</button>
      </form>

      <ul className="list-reset">
        {exerciseTypes.map((type) => (
          <li key={type._id} className="list-item">
            <strong>{type.name}</strong> – Category: {type.category}
          </li>
        ))}
      </ul>

      {exerciseTypes.length === 0 && <p>No exercise types defined yet.</p>}
    </div>
  );
};

export default ExerciseTypes;