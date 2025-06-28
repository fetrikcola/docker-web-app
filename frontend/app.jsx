import React from 'react';
import ReactDOM from 'react-dom/client';
import { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('Loading...');
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log('Fetching data...');
    
    // PENTING: Gunakan /api/hello (proxy) bukan localhost:5000
    fetch('/api/hello')
      .then((res) => {
        console.log('Response status:', res.status);
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log('Data received:', data);
        setMessage(data.message);
      })
      .catch((err) => {
        console.error('Fetch error:', err);
        setError(err.message);
        setMessage('Fetch failed: ' + err.message);
      });
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>{message}</h1>
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);