import React from 'react';
import Sidebar from './Sidebar';
import Home from './Home';
import Projects from './Projects';
import Resume from './Resume';
import About from './About';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <main classNam="main">
        <Home />
        <Projects />
        <Resume />
        <About />
      </main>
    </div>
  );
}

export default App;
