import React, { Component } from 'react';
import NavBar from './components/NavBar';
import SideDrawer from './components/SideDrawer';
import CreateContactButton from "./components/CreateContactButton";

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
        <section>
        <CreateContactButton />
        </section>
      </div>
    );
  }
}

export default App;
