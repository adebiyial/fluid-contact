import React, { Component } from 'react';
import NavBar from './components/NavBar';
import SideDrawer from './components/SideDrawer';
import ContactList from './components/ContactList';
import Notification from './components/Notification';
import ContactsProvider from './contexts/ContactContext';
import CreateContactButton from "./components/CreateContactButton";
import CreateNewContactModal from './components/Modals/CreateNewContactModal';
import EditContactModal from './components/Modals/EditContactModal';
import ViewContactModal from './components/Modals/ViewContactModal';

import './styles/sanitize.css';
import './styles/reset.css';
import './styles/modal.css';


class App extends Component {
  state = {
    showModal: false,
    modalToShow: '',
    renderNotification: false,
    notificationMessage: ''
  }

  displayModal = (showModal: false, modalToShow: '') => {
    // 1. check if a modal has been triggered
    this.setState({showModal, modalToShow});
    // 2. get which modal and display it.
    console.log("display modal: ", modalToShow);
    // this.renderModal(modalToShow);
  }

  renderModal = () => {
    
    let modalToRender;

    const { modalToShow, notificationMessage } = this.state;
    if(modalToShow === '') {
      alert("SHOW NO MODAL");
    }
    
    if(modalToShow === 'create-new-contact-modal') {
      console.clear();
      console.log("Render Create New Contact Modal");
      modalToRender = <CreateNewContactModal hideModal={this.hideModal} notificationMessage={this.getNotificationMessage}/>
    }
    if(modalToShow === 'view-contact-modal') {
      console.clear();
      console.log("Render View Contact Modal");
      modalToRender = <ViewContactModal />
    }
    if(modalToShow === 'edit-contact-modal') {
      console.clear();
      console.log("Render Edit Contact Modal");
      modalToRender = <EditContactModal />
    }

    return modalToRender;
  }

  hideModal = () => {
    this.setState({showModal: false });
  }

  getNotificationMessage = (notificationMessage) => {
    this.setState({notificationMessage})
  }
  
  
  render() {
    const showModalOverlayToggle = this.state.showModal === true ? 'overlay overlay-active' : 'overlay'
    const notificationToggle = this.state.renderNotification === true ? 'notification notification-active' : 'notification'
    const { displayModal, renderModal, hideModal } = this;
    return (
      <ContactsProvider>
        <div className="fluid-contact">
          <NavBar />
          <main>
          <SideDrawer />
          <ContactList />
          </main>
          <section>
          <CreateContactButton clicked={displayModal}/>
          </section>
          <section className='modals'>
            <div className={showModalOverlayToggle}>
              <div className='modalWrap'>
              { this.state.showModal && renderModal() }
              </div>
            </div>
          </section>

          { this.state.renderNotification && <Notification className={notificationToggle} msg={this.state.notificationMessage}/> }
        </div>
      </ContactsProvider>
    );
  }
}

export default App;
