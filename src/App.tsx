import React from 'react';
import logo from './logo.svg';
import Card from './components/Card'
import './App.css';

function App() {
  return (
      <>
          <Card
          title={"ChestPress"}
          image={logo}
          altText={"Logo"}
          text={"ChestPress (m)"}
          weight={"10KG"}
          reps={10}
          />
      </>
  );
}

export default App;
