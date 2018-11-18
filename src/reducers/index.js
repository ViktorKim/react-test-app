import {combineReducers} from 'redux';

import {projects} from './projects';
import {users} from './users';
import {system} from './system';

export const rootReducer = combineReducers({
    projects,
    users,
    system,
});