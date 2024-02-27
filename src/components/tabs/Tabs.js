import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import styles from '../app/App.module.css'
import { changeTabAction } from '../../redux/actions'

function Tabs() {
  const dispatch = useDispatch()
  const activeTab = useSelector((state) => state.activeTab)
  const setActiveTab = (value) => {
    dispatch(changeTabAction(value))
  }

  return (
    <div className={styles.tabs}>
      <label className={activeTab === 'Самый дешевый' ? `${styles.tabs__label_active}` : `${styles.tabs__label}`}>
        <input
          className={styles.tabs__input}
          name="tabs"
          type="radio"
          value="Самый дешевый"
          onChange={(e) => setActiveTab(e.target.value)}
        />
        Самый дешёвый
      </label>
      <label className={activeTab === 'Самый дешевый' ? `${styles.tabs__label}` : `${styles.tabs__label_active}`}>
        <input
          className={styles.tabs__input}
          name="tabs"
          type="radio"
          value="Самый быстрый"
          onChange={(e) => setActiveTab(e.target.value)}
        />
        Самый быстрый
      </label>
    </div>
  )
}

export default Tabs
