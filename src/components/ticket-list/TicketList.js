/* eslint-disable array-callback-return */
import React from 'react'
import { useSelector } from 'react-redux'
import { Alert } from 'antd'

import styles from '../app/App.module.css'
import Ticket from '../ticket/Ticket'
import ButtonMore from '../button-more/ButtonMore'
import Loader from '../loader/loader'

function TicketList() {
  const state = useSelector((state) => state)
  const isLoading = useSelector((state) => state.loading)
  const isStop = useSelector((state) => state.data.stop)
  const isError = useSelector((state) => state.error)

  const filterTickets = (state) => {
    return state.data.tickets.filter((el) => {
      if (state.sort.all) {
        return true
      } else {
        if (state.sort.noStops === true && (el.segments[0].stops.length === 0 || el.segments[1].stops.length === 0)) {
          return true
        } else if (
          state.sort.oneStop === true &&
          (el.segments[0].stops.length === 1 || el.segments[1].stops.length === 1)
        ) {
          return true
        } else if (
          state.sort.twoStops === true &&
          (el.segments[0].stops.length === 2 || el.segments[1].stops.length === 2)
        ) {
          return true
        } else if (
          state.sort.threeStops === true &&
          (el.segments[0].stops.length === 3 || el.segments[1].stops.length === 3)
        ) {
          return true
        }
      }
    })
  }

  const sortTickets = (state) => {
    const filteredTickets = filterTickets(state)
    return filteredTickets.sort((a, b) => {
      if (state.activeTab === 'Самый дешевый') {
        return a.price - b.price
      }
      return a.segments[0].duration + a.segments[1].duration - (b.segments[0].duration + b.segments[1].duration)
    })
  }

  if (sortTickets(state).length !== 0) {
    return (
      <ul className={styles.ticket__list}>
        {sortTickets(state).map((el, index) => {
          return <Ticket key={index} data={el} />
        })}
        <li>
          {isError ? <Alert message="Ошибка, попробуйте ещё раз" type="error" style={{ marginBottom: '20px' }} /> : ''}
        </li>
        <li>{isLoading && !isError ? <Loader /> : ''}</li>
        <li>{(!isStop && !isLoading) || isError ? <ButtonMore /> : ''}</li>
      </ul>
    )
  } else if (!isLoading) {
    return (
      <div>
        <Alert type="info" message="Рейсов, подходящих под заданные фильтры, не найдено" style={{ heigth: '50px' }} />
      </div>
    )
  } else {
    return <Loader />
  }
}

export default TicketList
