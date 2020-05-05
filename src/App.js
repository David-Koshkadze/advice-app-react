import React, { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  const [advice, setAdvice] = useState('');
  const [newAdvice, setNewAdvice] = useState(true);

  const url = 'https://api.adviceslip.com/advice';

  const fetchData = () => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setAdvice(data.slip.advice);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => fetchData(), [newAdvice]);

  return (
    <div className="App">
      <div className="card">
        <h1>{advice}</h1>
        <button onClick={() => setNewAdvice(!newAdvice)}>New Advice</button>
      </div>
    </div>
  );
};

export default App;
