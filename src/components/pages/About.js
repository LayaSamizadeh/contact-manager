import React from 'react'
import { useParams } from 'react-router-dom';


const About =() => {

    let params = useParams()
    return (
        <div>
            <h1 className="display-4 ">
                {params.id} About Contact Manager</h1>
            <p className="lead">Simple app to manage contacts</p>
            <p className="text-secondary">Version 1.0.0</p>
        </div>
    )
}

export default  About;