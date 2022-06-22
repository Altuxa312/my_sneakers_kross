import React from 'react'
import styles from './Search.module.scss'
const Search = ({setText,text}) => {
  return (
    <div className={styles.container}>
      <h1>Все кроссовки</h1>
      <input type="Search" 
      placeholder='поиск...'
      value={text}
      onChange={e => setText(e.target.value)}
      />
    </div>
  )
}

export default Search