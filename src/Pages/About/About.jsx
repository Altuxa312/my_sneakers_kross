import React from 'react'
import styles from './About.module.scss'
import smailik from '../../img/image 9 (1).svg'
const About = () => {
  return (
    <div className={styles.about}>
      <img src={smailik} alt="" />
      <h1>Закладок нет :(</h1>
      <h2>Вы ничего не добавляли в закладки</h2>
      <button>Вернуться назад</button>
    </div>
  )
}

export default About