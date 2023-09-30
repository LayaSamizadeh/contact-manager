import React, { Component } from "react";

const Context = React.createContext();

export class Provider extends Component {
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
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;