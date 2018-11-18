import React, {Component} from 'react';
import {createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {Provider} from 'react-redux';
import {rootReducer} from './reducers';

import Projects from './containers/Projects';
import ViewProject from './containers/ViewProject';
import Modal from './components/Modal';


const STORE = createStore(rootReducer, composeWithDevTools());

class App extends Component {
    render() {
        return (
            <Provider store={STORE}>
                <div className="App">
                    <ViewProject/>
                    <Modal triggerModalAction={() => false}
                           header='Confirm modal'
                           bodyText='are you shure'
                           footer='footer'
                           agreeAction={() => console.log('agree')}
                           declineAction={() => console.log('decline')}
                    />
                </div>
            </Provider>
        );
    }
}

export default App;
