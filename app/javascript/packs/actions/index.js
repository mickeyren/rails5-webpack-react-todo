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
    fetch('/api/tasks', {
      method: 'POST',
      body: JSON.stringify(params),
      credentials: 'same-origin'
    }).then(parseResponse).then((task) => {
      dispatch(makingRequest(true))
      dispatch(createTaskSuccess(task))
    }).catch((ex) => {
      console.log('error', ex)
      // this.addingToCart = false;
      swal(
        'Oops...',
        ex,
        'error'
      )
    })
  }
}
