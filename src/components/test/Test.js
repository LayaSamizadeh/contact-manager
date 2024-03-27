import React, { Component } from 'react'

export class Test extends Component {

    state ={
        test: 'test'
    }

    componentDidMount() {
        console.log("componentDidMount...")
    }

    componentWillMount() {
        console.log("componentWillMount...")
    }

    componentDidUpdate(){
        console.log("componentDidUpdate...")
    }

    UNSAFE_componentWillUpdate(){
        console.log("componentWillUpdate...")
    }

    componentWillReceiveProps(nextProps, nextState) {
        console.log("componentWillReceiveProps...")
    }

    render() {
        return (
            <div>
                <h1>
                    Test Component
                </h1>
            </div>
        )
    }
}

export default Test