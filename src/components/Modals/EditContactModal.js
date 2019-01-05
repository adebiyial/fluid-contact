import React, { Component } from 'react';

class EditContactModal extends Component {
  render() {
    return (
      <div className="ecm">
      <header className="modal-header">
        <h3 className="modal-title">edit contact</h3>
      </header>
      <section className="modal-info-section">
        <form action=".">
          <label htmlFor="name" className="name">
            <div className="modal-icon"></div>
            <input type="text" placeholder="first name" />
            <input type="text" placeholder="last name" />
          </label>
          <label htmlFor="job" className="job">
            <div className="modal-icon"></div>
            <input type="text" placeholder="company" />
            <input type="text" placeholder="job title" />
          </label>
          <label htmlFor="email" className="email">
            <div className="modal-icon"></div>
            <input type="email" placeholder="email" />
            <input type="email-label" placeholder="label" />
            <div className="modal-icon-2"></div>
          </label>
          <label htmlFor="phone" className="phone">
            <div className="modal-icon"></div>
            <input type="phone" placeholder="phone" />
            <input type="phone-type" placeholder="mobile" />
            <div className="modal-icon-2"></div>
          </label>
          <label htmlFor="notes" className="notes">
            <div className="modal-icon"></div>
            <input type="text" placeholder="notes" />
          </label>
        </form>
      </section>
      <footer className="modal-footer">
        <button>cancel</button> <button>save</button>
      </footer>
    </div>
    )
  }
}

export default EditContactModal;