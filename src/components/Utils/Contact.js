import React, { Component } from 'react';

class Contact extends Component {

  state = {
    existingInitials: []
  }

  handleClick = () => {
    this.props.clicked(true, 'view-contact-modal');
    this.props.viewContact(this.props.contactId);
  }

  handleStarContact = () => {
    this.props.starContact(this.props.contactId);
  }

  handleEditContact = () => {
    console.log('Edit', this.props.contactId);
  }

  handleDeleteContact = () => {
    console.log('Delete', this.props.contactId);
  }


  render() {
    const { firstName, lastName, email, phone, contactId, contactInitial } = this.props;
    const imgSrc = `https://robohash.org/${contactId}`;
    return (
      <li data-contact-initial={ contactInitial }>
        <div className="icon">
          <h3 className="contactInitial">{ contactInitial }</h3>
        </div>
        <div className="user-detail-wrap">
          <div className="user-detail" role='button' onClick={this.handleClick}>
            <div className="user--profile-img">
              <img src={imgSrc} alt="user img" />
              <div className="utils-check">
                <svg focusable="false" height="24px" viewBox="0 0 24 24" width="24px" xmlns="http://www.w3.org/2000/svg" >
                  <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" />
                  <path d="M0 0h24v24H0z" fill="none" />
                </svg>
              </div>
            </div>
            <p className="user-name">{firstName} {lastName}</p>
            <p className="user-email"> {email} </p>
            <p className="user-phone"> {phone} </p>
          </div>
          <div className="utils">
            <div className="util-icon-right">
              <div className="starContact" onClick={this.handleStarContact}>
              <svg
                focusable="false"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z" />
              </svg>
              </div>
              <div className="editContact" onClick={this.handleEditContact}>
              <svg
                focusable="false"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
                <path d="M0 0h24v24H0z" fill="none" />
              </svg>
              </div>
              <div className="deleteContact" onClick={this.handleDeleteContact}>
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
          </div>
        </div>
      </li>
    )
  }
}

export default Contact;