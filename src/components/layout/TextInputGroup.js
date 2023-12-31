import React from 'react'
import PropTypes from "prop-types";
import classname from "classname";

const TextInputGroup = ({
    label,
    type,
    name,
    placeholder,
    value,
    onChange,
    error
}) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>
                {label}
            </label>
            <input
                type={ type}
                name={name}
                className= {classname("form-control form-control-lg ", {"is-invalid ":error} )}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
            { error && 
                <div className="invalid-feedback">{error}</div>
            }
        </div>
    )
};

TextInputGroup.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange : PropTypes.func.isRequired,
    error: PropTypes.string
}

TextInputGroup.defaultProps = {
    type: 'text'
}

export default TextInputGroup