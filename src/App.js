import React, {Component} from 'react';
import Projects from './containers/Projects';
import ViewProject from './containers/ViewProject';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Projects />
                <ViewProject />
            </div>
        );
    }
}

export default App;
