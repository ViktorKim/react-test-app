import React from 'react';

import Button from '../components/Button';
import ProjectsList from '../components/ProjectsList';
import Pagination from '../components/Pagination';

const Projects = () => {
    return (
        <div className='projects'>
            <Button name={'Add'} action={() => {
                console.log('add')
            }}/>
            <Button name={'Refresh'} action={() => {
                console.log('refresh')
            }}/>
            <ProjectsList projects={[{id: '1', name: 'test'},{id: '2', name: 'test2'},{id: '3', name: 'test3'},{id: '4', name: 'test4'}]}/>
            <Pagination current={1} perPage={5}/>
        </div>
    )
};

export default Projects;
