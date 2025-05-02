import { useState, useEffect } from 'react';

const Stats = () => {
  const [stats, setStats] = useState({ steps: 0, calories: 0, minutes: 0 });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await fetch('/api/stats/1');
        if (!res.ok) throw new Error(`HTTP error ${res.status}`);
        const data = await res.json();
        setStats(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  return (
    <section style={styles.section}>
      <h2>Your Stats</h2>
      {loading ? (
        <div>Loading stats...</div>
      ) : error ? (
        <div>Error loading stats: {error}</div>
      ) : (
        <ul style={styles.ul}>
          <li>Steps Today: {stats.steps}</li>
          <li>Calories Burned: {stats.calories}</li>
          <li>Workout Time: {stats.minutes} minutes</li>
        </ul>
      )}
    </section>
  );
};

const styles = {
  section: {
    padding: '1rem',
    backgroundColor: '#f7f7f7',
    borderRadius: '8px',
  },
  ul: {
    listStyleType: 'none',
    padding: 0,
  },
};

export default Stats;