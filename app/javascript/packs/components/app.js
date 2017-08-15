import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import TasksContainer from '../containers/tasks'

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" component={TasksContainer} exact />
        </div>
      </Router>
    );
  }
};

export default App;
