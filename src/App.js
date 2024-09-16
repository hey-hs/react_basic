import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Task1 from './components/Task1';
import Task2 from './components/Task2';
import Task3 from './components/Task3';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <h1>React Programming Tasks</h1>
        
        {/* Navigation Links */}
        <nav>
          <Link to="/task1">Task 1</Link> | 
          <Link to="/task2">Task 2</Link> | 
          <Link to="/task3">Task 3</Link>
        </nav>

        {/* Routes for each Task */}
        <Routes>
          <Route path="/task1" element={<Task1 />} />
          <Route path="/task2" element={<Task2 />} />
          <Route path="/task3" element={<Task3 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
