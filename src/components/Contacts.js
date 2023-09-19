import React, { Component } from 'react'
import Contact from './Contact';

class Contacts extends Component {
    state = {
        contacts: [
            {
                id: 1,
                name: "John Doe",
                email: "jdoe@gmail.com",
                phone: "555-555-5555"
            },
            {
                id: 2,
                name: "Karen Smith",
                email: "karenith@gmail.com",
                phone: "555-333-5555"
            },
            {
                id: 3,
                name: "Henry Johnson",
                email: "henryson23@gmail.com",
                phone: "222-222-2222"
            }
        ]
    }

    deleteContact = id => {
        const { contacts } = this.state

        const newContacts = contacts.filter(contact => contact.id !== id)

        this.setState({ contacts: newContacts })
    }

    render() {

        const { contacts } = this.state; //destructuring
        return (
            <>
                {contacts.map(contact =>
                    <Contact key={contact.id}
                        contact={contact}
                        deleteClickHandler={this.deleteContact.bind(this, contact.id)}
                    />)}
            </>
        )
    }
}

export default Contacts
