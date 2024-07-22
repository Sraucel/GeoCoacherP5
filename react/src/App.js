// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Header from './components/header';
import Explore from './components/explore';
import './App.css';
import FormPage from './components/formpage'; 
import ReviewsPage from './components/reviewspage';
import AboutUs from './components/aboutus';
import LessonPlans from './components/lessonplans';
import InteractiveMaps from './components/interactivemaps'; 
import Forums from './components/forums';
import MapMaker from './components/mapmaker';
import Confirmation from './components/confirmation';

function App() {
  return (
    <Router>
      <div>
        <Navbar /> 
        <Routes>
          <Route path="/" element={<><Header /><AboutUs /></>} /> 
          <Route path="/services" element={<Explore />} />
          <Route path="/resources" element={<Explore />} />
          <Route path="/get-involved" element={<Explore />} />
          <Route path="/testimonials" element={<ReviewsPage />} />
          <Route path="/contact" element={<AboutUs />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/reviews" element={<ReviewsPage />} />
          <Route path="/booking" element={<><LessonPlans /><FormPage /></>} /> {/* Route for FormPage */}
          <Route path="/forums" element={<Forums />} />
          <Route path="/mapmaker" element={<MapMaker />} />
          <Route path="/confirmation" element={<Confirmation />} /> {/* Corrected this line */}
          <Route path="/interactive-maps" element={<InteractiveMaps />} /> {/* Route for InteractiveMaps */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
