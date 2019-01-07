import React, { Component } from 'react';
import { ContactsConsumer, ContactsContext } from '../contexts/ContactContext';
import Contact from './Utils/Contact';
import StarredContact from './Utils/StarredContact';
import '../styles/ContactList.css'

class ContactList extends Component {
  state = {
    starredContacts: [],
    allContacts: [],
    existingInitials: []
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

  sortAllContacts = (allContacts) => {
    const allContactsSorted = allContacts.sort(this.sortContactsComparisonFx);
    return allContactsSorted;
  }

  sortContactsComparisonFx = (a, b) => {
    a = a.firstName.toUpperCase();
    b = b.firstName.toUpperCase();
    return a > b ? 1 : b > a ? -1 : 0;
  }

  render() {
    const { starContact, sortAllContacts } = this;
    let existingInitials = [];

     return (
      <ContactsConsumer>
        {
          value => {
            const { allContacts, starredContacts  } = value;
            const noOfStarredContacts = starredContacts.length > 0 ? `${starredContacts.length}` : `0`;
            const noOfContacts = allContacts.length > 0 ? `${allContacts.length}` : `0`;
            
            return (
                parseInt(noOfContacts) <= 0 ?
                <div className='emptyContact'>
                <img src="//robohash.org/JI1.png?set=set2&size=150x150" alt="user profile img" />
                  <h1 className='emptyContactMsg'>
                  You do not have any contact yet. Click the <span className="addBtn">
                  add button + </span> to get started </h1>
                </div> : 
                <div className="contacts">
                <div className="starred--contacts">
                  {
                    Number(noOfStarredContacts) >= 0 &&
                    <header>
                    <h3 className="contact--heading">starred contacts ({ noOfStarredContacts })</h3>
                  </header>
                  }
                  <ul className="starred--contacts--list">
                    {
                      starredContacts.map(contact => {
                        return (
                          <StarredContact key={contact.contactId} firstName={contact.firstName}
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
                      sortAllContacts(allContacts).map(contact => {
                        let contactInitial = contact.firstName[0].toUpperCase();
                        contactInitial = existingInitials.includes(contactInitial) === true ? '' : contactInitial;
                        existingInitials.push(contactInitial);

                        return (
                          <Contact key={contact.contactId} firstName={contact.firstName}
                          lastName={contact.lastName} company="Google"
                          jobTitle="Head of VR" email={contact.email}
                          phone={contact.phone} notes="find him" clicked={this.props.clicked}
                          viewContact={this.props.viewContact} contactId={contact.contactId}
                          starContact={starContact} contactInitial={ contactInitial }
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