import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BellowsFooter from './components/BellowsFooter';
import BellowsHeader from './components/BellowsHeader';

import Bellows from './pages/Bellows';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <Router>
      
      <div>

        <Routes>
        <Route
            path="/"
            element={<LandingPage />}
          />
          <Route
            path="/bellows"
            element={<Bellows />}
          />
          {/* <Route
            path="*"
            element={<NoMatch />}
          /> */}
        </Routes>

      </div>
    </Router>
  );
}

export default App;
