import { connect } from 'react-redux'

import styles from '../app/App.module.css'
import { toggleFiltersAction } from '../../redux/actions'

function Filter({ filtersState, toggleFilters }) {
  return (
    <aside className={styles.filter}>
      <h3 className={styles.filter__title}>КОЛИЧЕСТВО ПЕРЕСАДОК</h3>
      <label className={styles.filter__item}>
        <input
          className={styles.filter__item_toggle}
          type="checkbox"
          checked={filtersState['all']}
          onChange={() => toggleFilters('all')}
        />
        <span>Все</span>
      </label>
      <label className={styles.filter__item}>
        <input
          className={styles.filter__item_toggle}
          type="checkbox"
          checked={filtersState['noStops']}
          onChange={() => toggleFilters('noStops')}
        />
        <span>Без пересадок</span>
      </label>
      <label className={styles.filter__item}>
        <input
          className={styles.filter__item_toggle}
          type="checkbox"
          checked={filtersState['oneStop']}
          onChange={() => toggleFilters('oneStop')}
        />
        <span>1 пересадка</span>
      </label>
      <label className={styles.filter__item}>
        <input
          className={styles.filter__item_toggle}
          type="checkbox"
          checked={filtersState['twoStops']}
          onChange={() => toggleFilters('twoStops')}
        />
        <span>2 пересадки</span>
      </label>
      <label className={styles.filter__item}>
        <input
          className={styles.filter__item_toggle}
          type="checkbox"
          checked={filtersState['threeStops']}
          onChange={() => toggleFilters('threeStops')}
        />
        <span>3 пересадки</span>
      </label>
    </aside>
  )
}

const mapStateToProps = (state) => {
  return {
    filtersState: state.sort,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleFilters: (payload) => dispatch(toggleFiltersAction(payload)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter)
