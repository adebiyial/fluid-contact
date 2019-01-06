import React, { Component } from 'react';
import { ContactsConsumer } from '../../contexts/ContactContext';

import icon from '../../assets/icons/ic_edit_24px.svg';
import email from '../../assets/icons/email.svg';
import phone from '../../assets/icons/phone.svg';
import company from '../../assets/icons/company.svg';

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
            const mailHref = `mailto:${currentContact.email}`;
            const phoneHref = `tel:${currentContact.phone}`;
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
                        <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />
                        <path d="M0 0h24v24H0z" fill="none" />
                      </svg>
                    </div>
                  </div>
                </header>
                <section className="modal-info-section">
                  <h3 className="modal-info-heading">contact details</h3>
                  <ul className="modal-info-list">
                    {
                      currentContact.company &&
                      <li className='company'>
                        <div className="modal-icon-wrap">
                        <img src={company} alt="company icon" />
                        </div>
                        <p>{currentContact.company}</p>
                      </li>
                    }
                    {
                      currentContact.email &&
                      <li>
                        <div className="modal-icon-wrap">
                        <img src={email} alt="email icon" />
                        </div>
                        <p>
                          <a href={mailHref}>{currentContact.email}</a>
                        </p>
                      </li>
                    }
                    {
                      currentContact.phone &&
                      <li>
                        <div className="modal-icon-wrap">
                          <img src={phone} alt="phone icon" />
                        </div>
                        <p>
                          <a href={phoneHref}>{currentContact.phone}</a>
                        </p>
                      </li>
                    }
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