import React, { Component } from 'react';
import { ContactsConsumer, ContactsContext } from '../contexts/ContactContext';
import Contact from './Utils/Contact';
import StarredContact from './Utils/StarredContact';
import '../styles/ContactList.css'

class ContactList extends Component {
  state = {
    starredContacts: [],
    allContacts: []
  }

  componentWillMount() {
    const allContacts = JSON.parse(localStorage.getItem('allContacts'));
    this.context.allContacts = allContacts === null ? [] : allContacts;

    const starredContacts = JSON.parse(localStorage.getItem('starredContacts'));
    this.context.starredContacts = starredContacts === null ? [] : starredContacts;
  }

  starContact = (contactId) => {
    console.log("going ahead to star", contactId);
    
    const allLocalStorageContacts = JSON.parse(localStorage.getItem('allContacts'));
    const contactToStar = allLocalStorageContacts.find(contact => contact.contactId === contactId);
    const starredContacts = JSON.parse(localStorage.getItem('starredContacts')) || [];
    console.log(starredContacts instanceof Array);
    starredContacts.push(contactToStar);
    localStorage.setItem('starredContacts', JSON.stringify(starredContacts));
    console.log(this.context);

    // add new contact to global context
    this.context.dispatch({
      type: 'STAR_CONTACT',
      starredContacts
    });

    // DONT;T ALLOW DUPLICATES
  }

  render() {
    const { starContact } = this;

     return (
      <ContactsConsumer>
        {
          value => {
            const { allContacts, starredContacts  } = value;
            const noOfStarredContacts = starredContacts.length > 0 ? `${starredContacts.length}` : `0`;
            const noOfContacts = allContacts.length > 0 ? `${allContacts.length}` : `0`;

            return (
              <div className="contacts">
                <div className="starred--contacts">
                  <header>
                    <h3 className="contact--heading">starred contacts ({ noOfStarredContacts })</h3>
                  </header>
                  <ul className="starred--contacts--list">
                    {
                      starredContacts.map(contact => {
                        return (
                          <StarredContact key={contact.phone} firstName={contact.firstName}
                          lastName={contact.lastName} company="Google"
                          jobTitle="Head of VR" email={contact.email}
                          phone={contact.phone} notes="find him" clicked={this.props.clicked}
                          viewContact={this.props.viewContact} contactId={contact.contactId}
                          starContact={starContact}
                          />
                        )
                      })
                    }
                  </ul>
                </div>
                <div className="all-contacts--list">
                  <header>
                    <h3 className="contact--heading">contacts ({ noOfContacts })</h3>
                  </header>
                  <ul className="contacts--list">
                    {
                      allContacts.map(contact => {
                        return (
                          <Contact key={contact.phone} firstName={contact.firstName}
                          lastName={contact.lastName} company="Google"
                          jobTitle="Head of VR" email={contact.email}
                          phone={contact.phone} notes="find him" clicked={this.props.clicked}
                          viewContact={this.props.viewContact} contactId={contact.contactId}
                          starContact={starContact}
                          />
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