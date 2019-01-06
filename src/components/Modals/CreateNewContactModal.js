import React, { Component } from 'react';
import { ContactsConsumer } from '../../contexts/ContactContext';
import email from '../../assets/icons/email.svg';
import phone from '../../assets/icons/phone.svg';
import company from '../../assets/icons/company.svg';

class CreateNewContactModal extends Component {

  state = {
    firstName: '',
    lastName: '',
    company: '',
    jobTitle: '',
    email: '',
    phone: '',
    notes: '',
    renderNotification: false
  }

  handleSubmit = (e, value) => {
    e.preventDefault();

    const { allContacts, dispatch } = value;
    const { firstName, lastName, company, jobTitle, email, phone, notes } = this.state;
    const newContact = {
      contactId: `contact${Date.now()}`,
      ...this.state
    }

    allContacts.push(newContact);
    console.log(allContacts);
    // add contacts to local storage
    localStorage.setItem('allContacts', JSON.stringify(allContacts));

    dispatch({
      type: 'CREATE_NEW_CONTACT',
      allContacts,
      firstName,
      lastName,
      company,
      jobTitle,
      email,
      phone,
      notes
    });

    this.setState({ firstName: '', lastName: '', company: '', jobTitle: '', email: '', phone: '', notes: '' });
    this.props.notificationMessage('New Contact Added');
    this.handleClick();
    e.currentTarget.reset();
  }

  handleChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    this.setState({[inputName]: inputValue})
  }

  handleClick = () => {
    this.props.hideModal();
  }

  render() {
    return (
      <ContactsConsumer>
      {
        value => {
          return (
            <div className="ccm">
              <header className="modal-header">
                <h3 className="modal-title">create new contact</h3>
              </header>
              <section className="modal-info-section">
                <form onSubmit={(e) => this.handleSubmit(e, value)}>
                  <label htmlFor="name" className="name">
                    <div className="modal-icon">
                      <img src={email} alt="person icon"/>
                    </div>
                    <input type="text" name="firstName" placeholder="first name" onChange={this.handleChange} />
                    <input type="text" name="lastName" placeholder="last name" onChange={this.handleChange} />
                  </label>
                  <label htmlFor="job" className="job">
                    <div className="modal-icon">
                      <img src={company} alt="company icon"/>
                    </div>
                    <input type="text" name="company" placeholder="company" onChange={this.handleChange} />
                    <input type="text" name="jobTitle" placeholder="job title" onChange={this.handleChange} />
                  </label>
                  <label htmlFor="email" className="email">
                    <div className="modal-icon">
                    <img src={email} alt="email icon"/>
                    </div>
                    <input type="email" name="email" placeholder="email" onChange={this.handleChange} />
                  </label>
                  <label htmlFor="phone" className="phone">
                    <div className="modal-icon">
                    <img src={phone} alt="phone icon"/>
                    </div>
                    <input type="phone" name="phone" placeholder="phone" onChange={this.handleChange} />
                  </label>
                  <label htmlFor="notes" className="notes">
                    <div className="modal-icon">
                    <img src={email} alt="notes icon"/>
                    </div>
                    <input type="text" name="notes" placeholder="notes" onChange={this.handleChange} />
                  </label>
                  <footer className="modal-footer">
                    <button className='cancel' type="button" onClick={this.handleClick}>cancel</button>
                    <button className='save' type="submit">save</button>
                  </footer>
                </form>
              </section>
            </div>
          )
        }
      }
      </ContactsConsumer>
    )
  }
}


export default CreateNewContactModal;