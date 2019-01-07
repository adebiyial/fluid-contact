import React, { Component } from 'react';


const ContactsContext = React.createContext({});

// reducer
const ContactsReducer = (state, action) => {
  switch (action.type) {
    case 'CREATE_NEW_CONTACT':
      return {
        ...state,
        allContacts: action.allContacts,
        firstName: action.firstName,
        lastName: action.lastName,
        company: action.company,
        jobTitle: action.jobTitle,
        email: action.email,
        phone: action.phone,
        notes: action.notes
      };
    case 'STAR_CONTACT':
      return {
        ...state,
        starredContacts: action.starredContacts
      }
    default:
      return state;
  }
}

class ContactsProvider extends Component {
  state = {
    starredContacts: [],
    allContacts: [],
    firstName: '',
    lastName: '',
    company: '',
    jobTitle: '',
    email: '',
    phone: '',
    notes: '',
    dispatch: action => this.setState(state => ContactsReducer(state, action))
  };

  render() {
    return (
      <ContactsContext.Provider value={ this.state }>
        { this.props.children }
      </ContactsContext.Provider>
    )
  }
}


export default ContactsProvider;
export const ContactsConsumer = ContactsContext.Consumer;
export { ContactsContext };