import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import WorkoutPage from './pages/WorkoutPage';
import DietPage from './pages/DietPage';
import KnowYourBodyPage from './pages/KnowYourBodyPage';
import CustomizePlanPage from './pages/CustomizePlanPage';
import './App.css';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/workout" element={<WorkoutPage />} />
      <Route path="/diet" element={<DietPage />} />
      <Route path="/know-your-body" element={<KnowYourBodyPage />} />
      <Route path="/customize-plan" element={<CustomizePlanPage />} />
    </Routes>
  </Router>
);

export default App;
