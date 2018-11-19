import React from 'react';
import PropTypes from 'prop-types';

import Button from './Button';

const ProjectsList = ({projects}) => {
    const viewProject = () => {
        console.log('view');
    };
    const editProject = () => {
        console.log('editProject');
    };
    const deleteProject = () => {
        console.log('deleteProject');
    };
    return (
        <ul className='projects-list'>
            {
                projects.map((project) => {
                    return (
                        <li key={project.id}>{project.name} managed By ({project.managedBy})
                            <Button name='view' action={viewProject}/>
                            <Button name='edit' action={editProject}/>
                            <Button name='delete' action={deleteProject}/>
                        </li>
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
