import React from 'react';
import './App.css';
import NavBar from './components/nav-bar';
import SideNavBar from './components/side-nav-bar';

function App() {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <main>
        <SideNavBar />
      </main>
    </div>
  );
}

export default App;
