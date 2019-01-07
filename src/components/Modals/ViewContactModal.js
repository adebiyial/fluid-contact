import React, { Component } from 'react';
import { ContactsConsumer } from '../../contexts/ContactContext';

import email from '../../assets/icons/email.svg';
import phone from '../../assets/icons/phone.svg';
import company from '../../assets/icons/company.svg';
import close from '../../assets/icons/close.svg';
import star from '../../assets/icons/star.svg';
import edit from '../../assets/icons/edit.svg';
import bin from '../../assets/icons/bin.svg';

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
            const imgSrc = `https://robohash.org/${currentContact.contactId}`
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
                      <div>
                        <img src={star} alt='star icon' title='star contact'/>
                      </div>
                     <div>
                        <img src={edit} alt='edit icon' title='edit contact'/>
                     </div>
                      <div>
                        <img src={bin} alt='bin icon' title='bin'/>
                      </div>
                      <div>
                        <img type="button" onClick={this.handleClick} src={close} alt='close icon' title='close'/>
                      </div>
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