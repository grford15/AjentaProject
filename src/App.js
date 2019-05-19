import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import axios from 'axios';
import NavBar from './components/nav-bar';
import SideNavBar from './components/side-nav-bar';
import Home from "./components/Home";
import Schedule from "./components/Schedule";

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
        meetings: undefined,
        users: undefined
    }
}

async componentDidMount(){
    const { data: meetings } = await axios.get('https://cors-anywhere.herokuapp.com/https://coding-test.ajenta.io/meetings');
    const { data: users } = await axios.get('https://cors-anywhere.herokuapp.com/https://coding-test.ajenta.io/users');
    this.setState({ meetings, users })
    
}

render(){
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <main>
        <div className="main-container">
        <Router>
          <SideNavBar />
            <Route exact path="/" render={(props) => <Home {...props} meetings={this.state.meetings} users={this.state.users} />} />
            <Route path="/schedule" render={(props) => <Schedule {...props} users={this.state.users} />} />
        </Router>
        </div>
      </main>
    </div>
  );
}
}

export default App;
