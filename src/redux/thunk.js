import {
  getSearchIdAction,
  getDataAction,
  startLoadingAction,
  stopLoadingAction,
  removeErrorAction,
  addErrorAction,
} from './actions'

export const fetchSearchId = () => {
  return (dispatch) => {
    fetch('https://aviasales-test-api.kata.academy/search')
      .then((response) => response.json())
      .then((res) => dispatch(getSearchIdAction(res)))
      .catch((err) => {
        alert('Ошибка, перезагрузите страницу')
        throw new Error(err)
      })
  }
}

export const fetchTickets = (searchId) => {
  return (dispatch, getState) => {
    dispatch(startLoadingAction())
    fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`)
      .then((response) => response.json())
      .then((res) => {
        dispatch(stopLoadingAction())
        dispatch(removeErrorAction())
        dispatch(getDataAction(res))
        getState()
      })
      .catch((error) => {
        dispatch(addErrorAction())
        throw new Error(error)
      })
  }
}
