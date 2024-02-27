import React from 'react'
import { Spin } from 'antd'

import styles from './Loader.module.css'

function Loader() {
  return (
    <div className={styles.Loader}>
      <Spin />
    </div>
  )
}

export default Loader
