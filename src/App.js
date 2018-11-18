import React, {Component} from 'react';
import Projects from './containers/Projects';
import ViewProject from './containers/ViewProject';
import Modal from './components/Modal';

class App extends Component {
    render() {
        return (
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
        );
    }
}

export default App;
