import React, {Component} from 'react';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {Provider} from 'react-redux';

import {rootReducer} from './reducers';

import Projects from './containers/Projects';
import ViewProject from './containers/ViewProject';
import Modal from './components/Modal';


const STORE = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk)
));

class App extends Component {
    render() {
        return (
            <Provider store={STORE}>
                <div className='App'>
                    <Projects />
                </div>
            </Provider>
        );
    }
}

export default App;
