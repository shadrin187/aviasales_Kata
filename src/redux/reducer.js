/* eslint-disable array-callback-return */
import {
  CHANGE_TAB,
  TOGGLE_FILTERS,
  GET_SEARCH_ID,
  GET_DATA,
  START_LOADING,
  STOP_LOADING,
  ADD_ERROR,
  REMOVE_ERROR,
} from './actions'

const defaultState = {
  activeTab: 'Самый быстрый',
  sort: {
    all: true,
    noStops: true,
    oneStop: true,
    twoStops: true,
    threeStops: true,
  },
  data: {
    tickets: [],
    stop: '',
  },
  searchId: '',
  error: false,
  loading: true,
}

const toggleFilters = (state, action) => {
  const newState = { ...state.sort }

  if (action.payload === 'all') {
    Object.keys(newState).map((key) => {
      newState[key] = !state.sort.all
    })
  } else {
    newState[action.payload] = !newState[action.payload]
    newState['all'] = Object.values(newState).slice(1).indexOf(false) === -1
  }
  return { ...state, sort: newState }
}

export const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_TAB:
      return { ...state, activeTab: action.payload }

    case TOGGLE_FILTERS:
      return toggleFilters(state, action)

    case GET_SEARCH_ID:
      return { ...state, searchId: action.payload.searchId }

    case GET_DATA:
      return {
        ...state,
        data: {
          tickets: [...state.data.tickets, ...action.payload.tickets],
          stop: action.payload.stop,
        },
      }

    case START_LOADING:
      return { ...state, loading: true }

    case STOP_LOADING:
      return { ...state, loading: false }

    case ADD_ERROR:
      return { ...state, loading: false, error: true }

    case REMOVE_ERROR:
      return { ...state, error: false }

    default:
      return state
  }
}
