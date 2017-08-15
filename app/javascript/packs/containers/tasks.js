import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Tasks from '../components/tasks';
import { createTaskAction } from '../actions'

const mapStateToProps = (state) => {
  console.log('mapStateToProps',state)
  return {
    tasks: state.tasks,
    isMakingRequest: state.makingRequest
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

