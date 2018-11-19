import React from 'react';
import {connect} from 'react-redux';
import {addProject} from '../actions/projectsActions'

import Button from '../components/Button';
import ProjectsList from '../components/ProjectsList';
import Pagination from '../components/Pagination';

const Projects = ({projects, testAction}) => {
    return (
        <div className='projects'>
            <Button name={'Add'} action={() => {
                console.log('add');
                testAction();
            }}/>
            <Button name={'Refresh'} action={() => {
                console.log('refresh')
            }}/>
            <ProjectsList projects={projects}/>
            <Pagination current={1} perPage={5}/>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        projects: state.projects
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        testAction: () => {
            dispatch(addProject())
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Projects);
