import React, { useState } from 'react';
import '../App.css';  // Import the CSS

const Task3 = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const data = ['Aarush', 'Harsh', 'Disha', 'Arpit','Shreya', 'Raj', 'Tejasvi', 'Raghvi'];

  const filteredData = data.filter((item) => item.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="container">
      <div className="task-header">
        <h2>Task 3: Search Filter</h2>
      </div>

      <div className="task-section">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <ul>
          {filteredData.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Task3;
