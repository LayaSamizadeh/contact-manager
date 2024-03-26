import React, { Component } from 'react'
import { Consumer } from '../../context';
import { v4 as uuid } from 'uuid';
import TextInputGroup from '../layout/TextInputGroup';
import { useNavigate } from 'react-router-dom';

const withNavigation = (WrappedComponent) => {
    return (props) => {
        const navigate = useNavigate();

        return (
            <WrappedComponent navigate={navigate} {...props} />
        );
    };
};
class AddContact extends Component {

    state = {
        name: '',
        email: '',
        phone: '',
        errors: {}
    };



    onSumbit = (dispatch, e) => {
        e.preventDefault();

        const { name, email, phone } = this.state;

        if (name === '') {
            this.setState({ errors: { name: 'name is required' } });
            return
        }

        if (email === '') {
            this.setState({ errors: { email: 'Email is required' } });
            return
        }

        if (phone === '') {
            this.setState({ errors: { phone: 'Phone is required' } });
            return
        }

        const newContact = { id: uuid(), name, email, phone };

        dispatch({ type: 'ADD_CONTACT', payload: newContact });

        this.setState({
            name: '',
            email: '',
            phone: '',
            errors: {}
        })

        this.props.navigate('/')

    }

    onChange = e => this.setState({ [e.target.name]: e.target.value })

    render() {
        const { name, email, phone, errors } = this.state;

        return (
            <Consumer>
                {value => {
                    const { dispatch } = value

                    return (
                        <div className="card mb-3">
                            <div className="card-header">Add Contact</div>
                            <div className="card-body">
                                <form onSubmit={this.onSumbit.bind(this, dispatch)}>
                                    <TextInputGroup
                                        label="Name"
                                        name="name"
                                        placeholder="Enter Name..."
                                        value={name}
                                        onChange={this.onChange}
                                        error={errors.name}
                                    />
                                    <TextInputGroup
                                        label="Email"
                                        type="email"
                                        name="email"
                                        placeholder="Enter Email..."
                                        value={email}
                                        onChange={this.onChange}
                                        error={errors.emai}
                                    />
                                    <TextInputGroup
                                        label="Phone"
                                        name="phone"
                                        placeholder="Enter Phone..."
                                        value={phone}
                                        onChange={this.onChange}
                                        error={errors.phone}
                                    />
                                    <input type="submit" value="Add Contact" className="btn btn-light btn-block" />
                                </form>
                            </div>
                        </div>
                    )
                }}
            </Consumer>
        )

    }
}

export default withNavigation(AddContact);