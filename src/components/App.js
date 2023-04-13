import React from 'react';
import '../styles/App.css'
import Sidebar from './Sidebar';
import Home from './Home';
import Projects from './Projects';
import Resume from './Resume';
import About from './About';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <main className="main">
        <Home />
        <Projects />
        <Resume />
        <About />
      </main>
    </div>
  );
}

export default App;
