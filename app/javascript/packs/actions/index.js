//var swal = require('sweetalert2')
import swal from 'sweetalert/dist/sweetalert.min'
import 'sweetalert/dist/sweetalert'

function parseResponse(response) {
  if (response.status == 204) { // NO CONTENT
    return response;
  }
  if (response.status >= 200 && response.status < 300) {
    return response.json()
  } else {
    var error = new Error(response.statusText)
    error.response = response
    throw error
  }
}

export function createTaskSuccess(task) {
    return {
        type: 'CREATE_TASK',
        task
    };
}

export function markCompleteSuccess(task) {
    return {
        type: 'COMPLETE_TASK',
        task
    };
}

export function makingRequest(bool) {
    return {
        type: 'MAKING_REQUEST',
        isLoading: bool
    }
}

export function createTaskAction(title) {
  return (dispatch) => {
    let params = {
      task: {
        title: title,
      }
    }
    dispatch(makingRequest(true))
    // just for fun, so we can see the loading indicator
    setTimeout(() => {
      fetch('/api/tasks', {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(params),
        credentials: 'same-origin'
      }).then(parseResponse).then((task) => {
        dispatch(makingRequest(false))
        dispatch(createTaskSuccess(task))
      }).catch((ex) => {
        console.log('error', ex)
        dispatch(makingRequest(false))
        swal(
          'Oops...',
          ex,
          'error'
        )
      })
    }, 1000)
  }
}

export function markCompleteAction(id) {
  return (dispatch) => {
    let params = {
      task: {
        completed_at: new Date()
      }
    }
    dispatch(makingRequest(true))
    // just for fun, so we can see the loading indicator
    setTimeout(() => {
      fetch(`/api/tasks/${id}`, {
        method: 'PUT',
        headers: headers,
        body: JSON.stringify(params),
        credentials: 'same-origin'
      }).then(parseResponse).then((task) => {
        dispatch(makingRequest(false))
        dispatch(markCompleteSuccess(task))
      }).catch((ex) => {
        console.log('error', ex)
        dispatch(makingRequest(false))
        swal(
          'Oops...',
          ex,
          'error'
        )
      })
    }, 1000)
  }
}
