import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Bellows from './pages/Bellows';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route
            path="/bellows"
            element={<Bellows />}
          />
          <Route
            path="*"
            element={<NoMatch />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
