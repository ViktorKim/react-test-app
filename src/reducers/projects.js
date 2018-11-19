import {ACTION_TYPE} from '../actions/actionsTypes';

const INIT_STATE = [
    {
        'id': '6ca834fc-2698-4a63-8d34-24a566c1cea0',
        'name': 'Project xx',
        'managedBy': 1,
        'scope:': 'Lorem ipsum dolor sit …'
    },
    {
        'id': '6ca834fc-2698-4a63-8d34-24a566c1cea1',
        'name': 'Project 2',
        'managedBy': 2,
        'scope:': 'Lorem ipsum dolor sit …'
    },
    {
        'id': '6ca834fc-2698-4a63-8d34-24a566c1cea2',
        'name': 'Project 400',
        'managedBy': 3,
        'scope:': 'Lorem ipsum dolor sit …'
    },
    {
        'id': '6ca834fc-2698-4a63-8d34-24a566c1cea3',
        'name': 'Project 500',
        'managedBy': 1,
        'scope:': 'Lorem ipsum dolor sit …'
    }
];

export const projects = (state = INIT_STATE, action) => {
    switch (action.type) {
        case ACTION_TYPE.ADD_PROJECT: {
            return [
                ...state,
                action.payload
            ];
        }
        case ACTION_TYPE.VIEW_PROJECT: {
            return action.payload;
        }
        case ACTION_TYPE.EDIT_PROJECT: {
            return action.payload;
        }
        case ACTION_TYPE.DELETE_PROJECT: {
            return action.payload;
        }
        default : {
            return state;
        }
    }
};
