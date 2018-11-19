import {ACTION_TYPE} from './actionsTypes';

export const addProject = () => {
    return dispatch => {
        console.log('test test');
        dispatch({type: ACTION_TYPE.ADD_PROJECT, payload:     {
                'id': (new Date()).toDateString(),
                'name': 'Project 400',
                'managedBy': 3,
                'scope:': 'Lorem ipsum dolor sit …'
            }
        });
    }
};