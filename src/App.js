import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import NavBar from './components/nav-bar';
import SideNavBar from './components/side-nav-bar';
import Home from "./components/Home";
import Schedule from "./components/Schedule";

function App() {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <main>
        <div className="main-container">
        <Router>
          <SideNavBar />
            <Route exact path="/" component={Home} />
            <Route path="/schedule" component={Schedule} />
        </Router>
        </div>
      </main>
    </div>
  );
}

export default App;
