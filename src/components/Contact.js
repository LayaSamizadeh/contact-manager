import React, { Component } from "react";
import PropTypes from "prop-types";
class Contact extends Component {

  state = {
    showContactInfo: true
  }

  onShowClick = e => {        // arrow function do the same binding this 
    this.setState({ showContactInfo: !this.state.showContactInfo })
  }

  onDeleteClick = e => {
    this.props.deleteClickHandler()
  }

  render() {
    const { name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;

    // for using this inside a functional component of class : onClick={this.onShowClick.bind(this)}

    return (
      <div className="card card-body mb-3">
        <h4>{name}
          <i
            onClick={this.onShowClick}
            className="fas fa-sort-down"
            style={{ cursor: "pointer" }}></i>
          <i
            onClick={this.onDeleteClick}
            className="fas fa-times"
            style={{ cursor: "pointer", float: "right", color: "red" }}
          ></i>
        </h4>
        {showContactInfo ? (
          <ul className="list-group">
            <li className="list-group-item">Email: {email}</li>
            <li className="list-group-item">Phone: {phone}</li>
          </ul>)
          : null}
      </div >
    );
  }
}

Contact.propTypes = {
  // name: PropTypes.string.isRequired,
  // email: PropTypes.string.isRequired,
  // phone: PropTypes.string.isRequired,
  contact: PropTypes.object.isRequired,
  deleteClickHandler: PropTypes.func.isRequired
};

export default Contact;
