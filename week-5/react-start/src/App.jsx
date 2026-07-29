// src/App.jsx
import React from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

function App() {
  // Define the string data to pass as props
  const companyName = "Muneeb Ur Rehman";
  const tagline = "Building the web of tomorrow, today.";
  const welcomeMessage = "Welcome to Muneeb Ur Rehman's React App!";
  const description = "We leverage cutting-edge tools like React and Vite to build blazing fast web experiences.";
  const currentYear = new Date().getFullYear();

  return (
    <div>
      {/* Passing basic string data via props */}
      <Header title={companyName} subtitle={tagline} />
      
      <MainContent greeting={welcomeMessage} bodyText={description} />
      
      <Footer copyright={`© ${currentYear} ${companyName}. All rights reserved.`} />
    </div>
  );
}

export default App;