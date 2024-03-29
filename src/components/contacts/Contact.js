import React, { Component } from "react";
import PropTypes from "prop-types";
import { Consumer } from "../../context";
class Contact extends Component {

  state = {
    showContactInfo: false
  }

  onShowClick = e => {        // arrow function do the same binding this 
    this.setState({ showContactInfo: !this.state.showContactInfo })
  }

  onDeleteClick = (id,dispatch) => {
    dispatch({type: 'DELETE_CONTACT', payload: id})
  }

  render() {
    const { name, email, phone,id } = this.props.contact;
    const { showContactInfo } = this.state;

    // for using this inside a functional component of class : onClick={this.onShowClick.bind(this)}

    return (


      <Consumer>
        {value => {
          const {dispatch} = value
          return (
            <div className="card card-body mb-3">
              <h4 className="d-flex align-items-center">{name}
                <i
                  onClick={this.onShowClick}
                  className="fas fa-sort-down ms-1"
                  style={{ cursor: "pointer" }}></i>
                <i
                  onClick={this.onDeleteClick.bind(this, id, dispatch)}
                  className="fas fa-times ms-auto  "
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
          )
        }}
      </Consumer>

    );
  }
}

Contact.propTypes = {
  // name: PropTypes.string.isRequired,
  // email: PropTypes.string.isRequired,
  // phone: PropTypes.string.isRequired,
  contact: PropTypes.object.isRequired,
  // deleteClickHandler: PropTypes.func.isRequired
};

export default Contact;
