import React, { useState } from 'react';
import './App.css';

function App() {
  const [userInput, setUserInput] = useState('');

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My React App</h1>
        <p>This is a simple React application.</p>
        <input type="text" onChange={handleInputChange} />
        <div dangerouslySetInnerHTML={{ __html: userInput }} />
      </header>
    </div>
  );
}

export default App;
