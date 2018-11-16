import React from 'react';
import Button from './Button';
import PropTypes from "prop-types";

const Pagination = ({current, perPage}) => {
    return (
        <ul className='pagination'>
            <Button name='previous' action={() => console.log('prev page')}/>
            <li>{current - 1}</li>
            <li>{current}</li>
            <li>{current + 1}</li>
            <Button name='next' action={() => console.log('next page')}/>
        </ul>
    )
};

Pagination.propTypes = {
    current: PropTypes.number.isRequired,
    perPage: PropTypes.number.isRequired,
};

export default Pagination;
