import { addMinutes } from 'date-fns'

import styles from '../app/App.module.css'

function Ticket({ data }) {
  const date1 = new Date(data.segments[0].date)
  const date2 = new Date(data.segments[1].date)
  const stops1 = data.segments[0].stops
  const stops2 = data.segments[1].stops
  const time1 = `${Math.floor(data.segments[0].duration / 60)}ч ${data.segments[0].duration % 60}м`
  const time2 = `${Math.floor(data.segments[1].duration / 60)}ч ${data.segments[1].duration % 60}м`

  const dateFormatter = (date, duration) => {
    let startHours = date.getHours()
    let startMinutes = date.getMinutes()
    let endHours = addMinutes(date, duration).getHours()
    let endMinutes = addMinutes(date, duration).getMinutes()

    startHours = String(startHours)
    startMinutes = String(startMinutes)
    endHours = String(endHours)
    endMinutes = String(endMinutes)

    if (startHours.length === 1) {
      startHours = '0' + startHours
    }

    if (startMinutes.length === 1) {
      startMinutes = '0' + startMinutes
    }

    if (endHours.length === 1) {
      endHours = '0' + endHours
    }

    if (endMinutes.length === 1) {
      endMinutes = '0' + endMinutes
    }

    return `${startHours}:${startMinutes} - ${endHours}:${endMinutes}`
  }

  const priceFormatter = (price) => {
    return String(price).slice(0, -3) + ' ' + String(price).slice(-3)
  }

  const stopsText = (stops) => {
    if (stops.length === 0) {
      return 'Без пересадок'
    } else if (stops.length === 1) {
      return '1 пересадка'
    } else {
      return `${stops.length} пересадки`
    }
  }
  return (
    <li className={styles.ticket__item}>
      <header className={styles.ticket__header}>
        <h1 className={styles.ticket__price}>{priceFormatter(data.price)} P</h1>
        <img className={styles.ticket__carrier} src={`https://pics.avs.io/99/36/${data.carrier}.png`} alt="carrier" />
      </header>
      <div className={styles.ticket__body}>
        <div className={styles.ticket__info}>
          <div className={styles.ticket__route}>
            <p className={styles.ticket__route_data}>
              {data.segments[0].origin} - {data.segments[0].destination}
            </p>
            <p className={styles.ticket__route_time}>{dateFormatter(date1, data.segments[0].duration)}</p>
          </div>
          <div className={styles.ticket__lenght}>
            <p className={styles.ticket__lenght_data}>В пути</p>
            <p className={styles.ticket__lenght_time}>{time1}</p>
          </div>
          <div className={styles.ticket__stops}>
            <p className={styles.ticket__stops_data}>{stopsText(stops1)}</p>
            <p className={styles.ticket__stops_city}>{stops1.join(', ')}</p>
          </div>
        </div>
        <div className={styles.ticket__info}>
          <div className={styles.ticket__route}>
            <p className={styles.ticket__route_data}>
              {data.segments[1].origin} - {data.segments[1].destination}
            </p>
            <p className={styles.ticket__route_time}>{dateFormatter(date2, data.segments[1].duration)}</p>
          </div>
          <div className={styles.ticket__lenght}>
            <p className={styles.ticket__lenght_data}>В пути</p>
            <p className={styles.ticket__lenght_time}>{time2}</p>
          </div>
          <div className={styles.ticket__stops}>
            <p className={styles.ticket__stops_data}>{stopsText(stops2)}</p>
            <p className={styles.ticket__stops_city}>{stops2.join(', ')}</p>
          </div>
        </div>
      </div>
    </li>
  )
}

export default Ticket
