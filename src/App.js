import React, { Component } from 'react';
import NavBar from './components/NavBar';
import SideDrawer from './components/SideDrawer';

import './styles/sanitize.css';
import './styles/reset.css';


class App extends Component {
  render() {
    return (
      <div className="fluid-contact">
        <NavBar />
        <main>
        <SideDrawer />
        </main>
      </div>
    );
  }
}

export default App;
