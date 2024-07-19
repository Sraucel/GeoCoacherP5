import React from 'react';
import Navbar from './components/navbar';
import Header from './components/header';
import Explore from './components/explore';
import './App.css';
import Background from './components/background';
import FormPage from './components/formpage'; 
import ReviewsPage from './components/reviewspage';

function App() {
  return (
    <div className="App">
      <Background>
        <Navbar />
        <Header />
      </Background>
      <main>
        <Explore />
        <FormPage/>
        <ReviewsPage/>
      </main>
    </div>
  );
}

export default App;
