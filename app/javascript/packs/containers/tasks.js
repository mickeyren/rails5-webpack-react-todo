import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Tasks from '../components/tasks';

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);

