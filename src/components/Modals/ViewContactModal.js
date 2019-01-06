import React, { Component } from 'react';
import { ContactsConsumer } from '../../contexts/ContactContext';

class ViewContactModal extends Component {
  
  handleClick = () => {
    this.props.hideModal();
  }

  render() {
    return (
      <ContactsConsumer>
        {
          value => {
            const { allContacts } = value;
            const contactId = this.props.contactId;
            const currentContact = allContacts.find(contact => contact.contactId === contactId);
            const imgSrc = `https://robohash.org/${currentContact.phone}`
            return (
              <div className="vcm">
              <header className="modal-header">
                <div className="modal-left">
                  <div className="modal-user-small-img">
                    <img src={imgSrc} alt="user small img" />
                  </div>
                  <p className="user-name">{currentContact.firstName} {currentContact.lastName}</p>
                </div>
                <div className="modal-right">
                  <div className="util-icons">
                    <svg
                      focusable="false"
                      height="24px"
                      viewBox="0 0 24 24"
                      width="24px"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"
                      />
                    </svg>
                    <svg
                      focusable="false"
                      height="24px"
                      viewBox="0 0 24 24"
                      width="24px"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
                      />
                      <path d="M0 0h24v24H0z" fill="none" />
                    </svg>
                    <svg
                      focusable="false"
                      height="24px"
                      viewBox="0 0 24 24"
                      width="24px"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0 0h24v24H0z" fill="none" />
                      <path
                        d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
                      />
                    </svg>
                  </div>
                </div>
              </header>
              <section className="modal-info-section">
                <h3 className="modal-info-heading">contact details</h3>
                <ul className="modal-info-list">
                  <li>
                    <div className="modal-icon-wrap">
                      <svg
                        focusable="false"
                        height="24px"
                        viewBox="0 0 24 24"
                        width="24px"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20 0H4v2h16V0zM4 24h16v-2H4v2zM20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-8 2.75c1.24 0 2.25 1.01 2.25 2.25s-1.01 2.25-2.25 2.25S9.75 10.24 9.75 9 10.76 6.75 12 6.75zM17 17H7v-1.5c0-1.67 3.33-2.5 5-2.5s5 .83 5 2.5V17z"
                        />
                      </svg>
                    </div>
                    <p>{currentContact.company }</p>
                  </li>
                  <li>
                    <div className="modal-icon-wrap">
                      <svg
                        focusable="false"
                        height="24px"
                        viewBox="0 0 24 24"
                        width="24px"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20 0H4v2h16V0zM4 24h16v-2H4v2zM20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-8 2.75c1.24 0 2.25 1.01 2.25 2.25s-1.01 2.25-2.25 2.25S9.75 10.24 9.75 9 10.76 6.75 12 6.75zM17 17H7v-1.5c0-1.67 3.33-2.5 5-2.5s5 .83 5 2.5V17z"
                        />
                      </svg>
                    </div>
                    <p>{currentContact.email}</p>
                  </li>
                  <li>
                    <div className="modal-icon-wrap">
                      <svg
                        focusable="false"
                        height="24px"
                        viewBox="0 0 24 24"
                        width="24px"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20 0H4v2h16V0zM4 24h16v-2H4v2zM20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-8 2.75c1.24 0 2.25 1.01 2.25 2.25s-1.01 2.25-2.25 2.25S9.75 10.24 9.75 9 10.76 6.75 12 6.75zM17 17H7v-1.5c0-1.67 3.33-2.5 5-2.5s5 .83 5 2.5V17z"
                        />
                      </svg>
                    </div>
                    <p>{currentContact.phone}</p>
                  </li>
                </ul>
                <footer className="modal-footer">
                    <button className='cancel' type="button" onClick={this.handleClick}>cancel</button>
                  </footer>
              </section>
            </div>
            )
          }
        }

      </ContactsConsumer>
    )
  }
}

export default ViewContactModal;