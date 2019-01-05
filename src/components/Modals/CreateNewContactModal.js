import React, { Component } from 'react';

class CreateNewContactModal extends Component {

  handleChange = (e) => {
    console.log(e);
  }

  render() {
    return (
      <div className="ccm">
        <header className="modal-header">
          <h3 className="modal-title">create new contact</h3>
        </header>
        <section className="modal-info-section">
          <form >
            <label htmlFor="name" className="name">
              <div className="modal-icon"></div>
              <input type="text" name="firstName" placeholder="first name" onChange={this.handleChange} />
              <input type="text" name="lastName" placeholder="last name" onChange={this.handleChange} />
            </label>
            <label htmlFor="job" className="job">
              <div className="modal-icon"></div>
              <input type="text" name="company" placeholder="company" onChange={this.handleChange} />
              <input type="text" name="jobTitle" placeholder="job title" onChange={this.handleChange} />
            </label>
            <label htmlFor="email" className="email">
              <div className="modal-icon"></div>
              <input type="email" name="email" placeholder="email" onChange={this.handleChange} />
            </label>
            <label htmlFor="phone" className="phone">
              <div className="modal-icon"></div>
              <input type="phone" name="phone" placeholder="phone" onChange={this.handleChange} />
            </label>
            <label htmlFor="notes" className="notes">
              <div className="modal-icon"></div>
              <input type="text" name="notes" placeholder="notes" onChange={this.handleChange} />
            </label>
            <footer className="modal-footer">
              <button className='cancel' onClick={() => this.props.hideModal}>cancel</button>
              <button disabled className='save' type="submit">save</button>
            </footer>
          </form>
        </section>
      </div>
    )
  }
}


export default CreateNewContactModal;