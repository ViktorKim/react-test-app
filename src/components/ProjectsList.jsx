import React from 'react';
import PropTypes from 'prop-types';

const ProjectsList = ({projects}) => {
    return (
        <ul className='projects-list'>
            {
                projects.map((project) => {
                    return (
                        <li key={project.id}>{project.name}</li>
                    )
                })
            }
        </ul>
    )
};

ProjectsList.propTypes = {
    projects: PropTypes.array.isRequired,
};

export default ProjectsList;
