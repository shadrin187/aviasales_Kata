import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import styles from '../app/App.module.css'
import { fetchTickets } from '../../redux/thunk'

function ButtonMore() {
  const searchId = useSelector((state) => state.searchId)
  const isError = useSelector((state) => state.error)
  const dispatch = useDispatch()
  return (
    <button className={styles.button__more} onClick={() => dispatch(fetchTickets(searchId))}>
      {isError ? 'Попробовать ещё раз' : 'Показать ещё 500 билетов!'}
    </button>
  )
}

export default ButtonMore
