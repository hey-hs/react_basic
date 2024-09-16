import React, { useState } from 'react';
import '../App.css';  // Import the CSS

const Task1 = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isDisabled, setIsDisabled] = useState(false); // Toggle for enabling/disabling button
  const [textValue, setTextValue] = useState('');
  const [sumResult, setSumResult] = useState(0);
  const [dynamicChildren, setDynamicChildren] = useState([]);
  const [num1, setNum1] = useState('');  
  const [num2, setNum2] = useState('');

  const handleSum = () => {
    setSumResult(Number(num1) + Number(num2));  // Calculate the sum
  };

  return (
    <div className="container">
      <div className="task-header">
        <h2>Task 1: Small Programming Learning Tasks</h2>
      </div>

      <div className="task-section">
        <h2>Simple JSX</h2>
        <p>This is an example of simple JSX content being rendered on the screen.</p>
      </div>

      <div className="task-section">
        <h2>Array of Records</h2>
        <ul>
          {['Record 1', 'Record 2', 'Record 3'].map((record, index) => (
            <li key={index}>{record}</li>
          ))}
        </ul>
      </div>

      <div className="task-section">
        <h2>Show/Hide Element</h2>
        <button onClick={() => setIsVisible(!isVisible)}>Toggle Visibility</button>
        {isVisible && <p>This element is now visible.</p>}
      </div>

      <div className="task-section">
        <h2>Enable/Disable Button</h2>
        <button onClick={() => setIsDisabled(!isDisabled)}>Toggle Disable</button>
        <button disabled={isDisabled}>I am {isDisabled ? 'Disabled' : 'Enabled'}</button>
      </div>

      <div className="task-section">
        <h2>Two-way Data Binding</h2>
        <input
          type="text"
          value={textValue}
          onChange={(e) => setTextValue(e.target.value)}
          placeholder="Type something"
        />
        <p>Value: {textValue}</p>
      </div>

      <div className="task-section">
        <h2>Dynamically Add Child Components</h2>
        <button onClick={() => setDynamicChildren([...dynamicChildren, `Child ${dynamicChildren.length + 1}`])}>
          Add Child
        </button>
        <div className="dynamic-children">
          {dynamicChildren.map((child, index) => (
            <p key={index}>{child}</p>
          ))}
        </div>
      </div>

      <div className="task-section">
        <h2>Sum of Two Numbers</h2>
        <input 
          type="number" 
          placeholder="Number 1" 
          value={num1} 
          onChange={(e) => setNum1(e.target.value)} 
        />
        <input 
          type="number" 
          placeholder="Number 2" 
          value={num2} 
          onChange={(e) => setNum2(e.target.value)} 
        />
        
        {/* Manually Enable/Disable the Calculate Button */}
        <button 
          onClick={handleSum} 
          disabled={isDisabled}
        >
          Calculate Sum
        </button>

        <button 
          onClick={() => setIsDisabled(!isDisabled)}
        >
          {isDisabled ? 'Enable' : 'Disable'} Calculate Button
        </button>

        <p>Sum: {sumResult}</p>
      </div>
    </div>
  );
};

export default Task1;
