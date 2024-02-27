export const CHANGE_TAB = 'CHANGE_TAB'
export const TOGGLE_FILTERS = 'TOGGLE_FILTERS'
export const GET_SEARCH_ID = 'GET_SEARCH_ID'
export const GET_DATA = 'GET_DATA'
export const START_LOADING = 'START_LOADING'
export const STOP_LOADING = 'STOP_LOADING'
export const ADD_ERROR = 'ADD_ERROR'
export const REMOVE_ERROR = 'REMOVE_ERROR'

export const changeTabAction = (payload) => {
  return {
    type: CHANGE_TAB,
    payload,
  }
}

export const toggleFiltersAction = (payload) => {
  return {
    type: TOGGLE_FILTERS,
    payload,
  }
}

export const getSearchIdAction = (payload) => {
  return {
    type: GET_SEARCH_ID,
    payload,
  }
}

export const getDataAction = (payload) => {
  return {
    type: GET_DATA,
    payload,
  }
}

export const startLoadingAction = () => {
  return {
    type: START_LOADING,
  }
}

export const stopLoadingAction = () => {
  return {
    type: STOP_LOADING,
  }
}

export const addErrorAction = () => {
  return {
    type: ADD_ERROR,
  }
}

export const removeErrorAction = () => {
  return {
    type: REMOVE_ERROR,
  }
}
