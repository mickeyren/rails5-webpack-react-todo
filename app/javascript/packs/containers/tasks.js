import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Tasks from '../components/tasks';
import { createTaskAction } from '../actions'

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onCreateTask: (title) => {
      dispatch(createTaskAction(title))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);

