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
    render() {

        const {contacts} = this.state; //destructuring
        return (
            <div>
                {contacts.map(contact =>
                    <Contact key={contact.id}
                        name ={contact.name}
                        email = {contact.email}
                        phone = {contact.phone}
                    /> )}
            </div>
        )
    }
}

export default Contacts
