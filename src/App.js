import React, { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000/')
      .then(response => response.text()) 
      .then(data => setMessage(data)) 
      .catch(error => console.error('Error al conectarse al backend:', error));
  }, []);

  return (
    <div>
      <h1>Frontend React</h1>
      <p>{message}</p> 
    </div>
  );
}

export default App;
