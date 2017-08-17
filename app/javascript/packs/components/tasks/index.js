import React from 'react'
import Spinner from 'react-spinkit'
import '!style-loader!css-loader!react-spinkit/css/wave.css'

class Tasks extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      filter: 'all'
    }

    this.filteredTasks = props.tasks
    this.handleKeyPress = this.handleKeyPress.bind(this)
    this.handleMarkComplete = this.handleMarkComplete.bind(this)
    this.handleDeleteTask = this.handleDeleteTask.bind(this)
    this.handleFilterAll = this.handleFilterAll.bind(this)
    this.handleFilterCompleted = this.handleFilterCompleted.bind(this)
    this.handleFilterActive = this.handleFilterActive.bind(this)
  }

  handleKeyPress(e) {
    if (e.key === 'Enter') {
      this.props.onCreateTask(e.target.value)
      this.refs.input.value = ''
    }
  }

  handleMarkComplete(e) {
    if(!e.target.checked) {
      return e.preventDefault()
    }
    this.props.onMarkComplete(e.target.dataset.id)
  }

  handleDeleteTask(e) {
    this.props.onDeleteTask(e.target.dataset.id)
  }

  componentWillReceiveProps(nextProps) {
    this.filter(nextProps)
  }

  filter(props) {
    switch(this.state.filter) {
      case 'all':
        return this.filteredTasks = props.tasks
      case 'active':
        return this.filteredTasks = props.tasks.filter((task) => {
          return task.completed_at == null
        })
      case 'completed':
        return this.filteredTasks = props.tasks.filter((task) => {
          return task.completed_at != null
        })
      default:
        return this.filteredTasks
    }
  }

  handleFilterAll(e) {
    this.filteredTasks = this.props.tasks
    this.setState({filter: 'all'})
  }

  handleFilterCompleted(e) {
    this.filter(this.props)
    this.setState({filter: 'completed'})
  }

  handleFilterActive(e) {
    this.filter(this.props)
    this.setState({filter: 'active'})
  }

  filteredList() {
    return this.filteredTasks
  }

  render() {
    let list = this.filteredList().map((task) => {
      if(task.completed_at) {
        return (
          <li className="completed" key={ task.id }>
            <div className="view">
              <input className="toggle" type="checkbox" onClick={this.handleMarkComplete} defaultChecked />
              <label>{ task.title }</label>
              <button className="destroy" onClick={this.handleDeleteTask} data-id={task.id} />
            </div>
            <input className="edit" defaultValue="Create a TodoMVC template" />
          </li>
        )
      } else {
        return (
          <li className={this.completed_at != null ? 'completed' : ''} key={ task.id }>
            <div className="view">
              <input className="toggle" type="checkbox" data-id={task.id} onClick={this.handleMarkComplete} />
              <label>{ task.title }</label>
              <button className="destroy" onClick={this.handleDeleteTask} data-id={task.id}></button>
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
            <input className="new-todo" placeholder="What needs to be done?" ref="input" onKeyPress={this.handleKeyPress} />
          </header>
          {/* This section should be hidden by default and shown when there are todos */}
          <section className="main">
            <input id="toggle-all" className="toggle-all" type="checkbox" />
            <label htmlFor="toggle-all">Mark all as complete</label>
            <ul className="todo-list">
              {/* These are here just to show the structure of the list items */}
              {/* List items should get the class `editing` when editing and `completed` when marked as completed */}
              {this.props.isMakingRequest &&
              <li>
                <div className="view loader">
                <label>
                  <Spinner name="wave" color="#adadad" />
                </label>
                </div>
              </li>
              }
              { list }
            </ul>
          </section>
          {/* This footer should hidden by default and shown when there are todos */}
          <footer className="footer">
            {/* This should be `0 items left` by default */}
            <span className="todo-count"><strong>{ this.filteredList().length }</strong> tasks</span>
            {/* Remove this if you don't implement routing */}
            <ul className="filters">
              <li>
                <a className={this.state.filter == 'all' ? 'selected' : ''} href="#/" onClick={this.handleFilterAll}>All</a>
              </li>
              <li>
                <a className={this.state.filter == 'active' ? 'selected' : ''} href="#/active" onClick={this.handleFilterActive}>Active</a>
              </li>
              <li>
                <a className={this.state.filter == 'completed' ? 'selected' : ''} href="#/completed" onClick={this.handleFilterCompleted}>Completed</a>
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

