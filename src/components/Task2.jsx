import React, { useState } from 'react';
import '../App.css';  // Import the CSS

const Task2 = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div className="container">
      <div className="task-header">
        <h2>Task 2: Counter</h2>
      </div>

      <div className="task-section">
        <p>Counter Value: {counter}</p>
        <button onClick={() => setCounter(counter + 1)}>Increase</button>
        <button onClick={() => setCounter(counter - 1)}>Decrease</button>
      </div>
    </div>
  );
};

export default Task2;
