import React, { Component } from 'react';

import '../styles/CreateContactButton.css'


class CreateContactButton extends Component {

  handleClick = () => {
    console.log("clicked")
    this.props.clicked(true, 'create-new-contact-modal');
  }

  render() {
    return (
      <button className="new--contact--btn" onClick={this.handleClick}>
        <svg focusable="false" height="48px" viewBox="0 0 48 48" width="48px" xmlns="http://www.w3.org/2000/svg" >
          <path d="M38 26H26v12h-4V26H10v-4h12V10h4v12h12v4z" />
        </svg>
      </button>
    )
  }
}


export default CreateContactButton;