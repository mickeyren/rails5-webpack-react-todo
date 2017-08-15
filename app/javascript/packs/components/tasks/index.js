import React from 'react'

class Tasks extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: null
    }

    this.handleKeyPress = this.handleKeyPress.bind(this)
  }

  handleKeyPress(e) {
    if (e.key === 'Enter') {
      console.log('do validate');
      this.props.onCreateTask(this.state.title)
    }
  }

  render() {
    var list = this.props.tasks.map((task) => {
      if(task.completed_at) {
        return (
          <li className="completed" key={ task.id }>
            <div className="view">
              <input className="toggle" type="checkbox" defaultChecked />
              <label>{ task.title }</label>
              <button className="destroy" />
            </div>
            <input className="edit" defaultValue="Create a TodoMVC template" />
          </li>
        )
      } else {
        return (
          <li key={ task.id }>
            <div className="view">
              <input className="toggle" type="checkbox" />
              <label>{ task.title }</label>
              <button className="destroy"></button>
            </div>
            <input className="edit" />
          </li>
        )
      }
    })

    return (
      <div>
        <section className="todoapp">
          <header className="header">
            <h1>todos</h1>
            <input className="new-todo" placeholder="What needs to be done?" onKeyPress={this.handleKeyPress} />
          </header>
          {/* This section should be hidden by default and shown when there are todos */}
          <section className="main">
            <input id="toggle-all" className="toggle-all" type="checkbox" />
            <label htmlFor="toggle-all">Mark all as complete</label>
            <ul className="todo-list">
              {/* These are here just to show the structure of the list items */}
              {/* List items should get the class `editing` when editing and `completed` when marked as completed */}
              { list }
            </ul>
          </section>
          {/* This footer should hidden by default and shown when there are todos */}
          <footer className="footer">
            {/* This should be `0 items left` by default */}
            <span className="todo-count"><strong>{ this.props.tasks.length }</strong> tasks</span>
            {/* Remove this if you don't implement routing */}
            <ul className="filters">
              <li>
                <a className="selected" href="#/">All</a>
              </li>
              <li>
                <a href="#/active">Active</a>
              </li>
              <li>
                <a href="#/completed">Completed</a>
              </li>
            </ul>
            {/* Hidden if no completed items are left ↓ */}
          </footer>
        </section>
      </div>
    );
  }
}


export default Tasks;

