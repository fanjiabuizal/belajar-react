import { useEffect, useState } from 'react';

function HealthCheck() {
  const [status, setStatus] = useState('healthy');

  useEffect(() => {
    const checkHealth = () => {
      try {
        setStatus('healthy');
      } catch (error) {
        setStatus('unhealthy');
      }
    };

    checkHealth();
  }, []);

  if (window.location.pathname === '/health') {
    return (
      <div>
        <h1>Health Check</h1>
        <p>Status: {status}</p>
        <p>Timestamp: {new Date().toISOString()}</p>
      </div>
    );
  }

  return null;
}

export default HealthCheck;