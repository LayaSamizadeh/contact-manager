import React, { Component } from "react";
import PropTypes from "prop-types";
class Contact extends Component {

  // constructor() {
  //   super();
  //   this.state = {}

  //   this.onShowClick = this.onShowClick.bind(this);  
  //   /*for using this inside a functional component of class */
  // }

  // static propTypes = {
  //   name: PropTypes.string.isRequired,
  //   email: PropTypes.string.isRequired,
  //   phone: PropTypes.string.isRequired,
  // };

  state = {}

  onShowClick = e => {        // arrow function do the same binding this 
    console.log(e.target);
  }

  render() {
    const { name, email, phone } = this.props.contact;

    // for using this inside a functional component of class : onClick={this.onShowClick.bind(this)}

    return (
      <div className="card card-body mb-3">
        <h4>{name}
          <i onClick={this.onShowClick} className=" fas fa-sort-down"></i>
        </h4>
        <ul className="list-group">
          <li className="list-group-item">Email: {email}</li>
          <li className="list-group-item">Phone: {phone}</li>
        </ul>
      </div >
    );
  }
}

Contact.propTypes = {
  // name: PropTypes.string.isRequired,
  // email: PropTypes.string.isRequired,
  // phone: PropTypes.string.isRequired,
  contact: PropTypes.object.isRequired
};

export default Contact;
