import React from 'react';
import PropTypes from "prop-types";

const Button = ({name, action}) => {
    return (
        <button onClick={action}>
            {name}
        </button>
    )
};

Button.propTypes = {
    name: PropTypes.string.isRequired,
    action: PropTypes.func.isRequired,
};

export default Button;
