import { useDispatch, useSelector } from 'react-redux'

import logo from '../../icons/Logo.svg'
import Filter from '../filter/Filter'
import Tabs from '../tabs/Tabs'
import TicketList from '../ticket-list/TicketList'
import { fetchSearchId, fetchTickets } from '../../redux/thunk'

import styles from './App.module.css'

function App() {
  const dispatch = useDispatch()
  const searchId = useSelector((state) => state.searchId)
  const tickets = useSelector((state) => state.data.tickets)

  if (!searchId) {
    dispatch(fetchSearchId())
  } else if (tickets.length === 0) {
    dispatch(fetchTickets(searchId))
  }

  return (
    <div className={styles.app}>
      <header>
        <img className={styles.logo} src={logo} alt="logo" />
      </header>
      <div className={styles.container}>
        <Filter />
        <main className={styles.main}>
          <Tabs />
          <TicketList />
        </main>
      </div>
    </div>
  )
}

export default App
