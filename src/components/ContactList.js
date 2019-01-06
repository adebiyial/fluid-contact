import React, { Component } from 'react';
import { ContactsConsumer, ContactsContext } from '../contexts/ContactContext';
import Contact from './Utils/Contact';
import '../styles/ContactList.css'

class ContactList extends Component {
  state = {
    starredContacts: [],
    allContacts: []
  }

  componentWillMount() {
    const allContacts = JSON.parse(localStorage.getItem('allContacts'));
    this.context.allContacts = allContacts === null ? [] : allContacts;
  }

  render() {
    return (
      <ContactsConsumer>
        {
          value => {
            const { allContacts  } = value;
            return (
              <div className="contacts">
                <div className="starred--contacts">
                  <header>
                    <h3 className="contact--heading">starred contacts (10)</h3>
                  </header>
                  <ul className="starred--contacts--list">
                    <p>Starred contact list will go here</p>
                  </ul>
                </div>
                <div className="all-contacts--list">
                  <header>
                    <h3 className="contact--heading">contacts (540)</h3>
                  </header>
                  <ul className="contacts--list">
                    {
                      allContacts.map(contact => {
                        return (
                          <Contact key={contact.phone} firstName={contact.firstName} lastName={contact.lastName}
                          company="Google" jobTitle="Head of VR" email={contact.email}
                          phone={contact.phone} notes="find him" clicked={this.props.clicked}
                          viewContact={this.props.viewContact} contactId={contact.contactId}/>
                        )
                      })
                    }
                  </ul>
                </div>
              </div>
            )
          }
        }
      </ContactsConsumer>
    )
  }
}
ContactList.contextType = ContactsContext;

export default ContactList;