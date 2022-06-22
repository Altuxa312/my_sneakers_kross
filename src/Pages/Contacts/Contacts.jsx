import React from 'react'
import styles from './Contacts.module.scss'
import smail from '../../img/image 9.svg'
const Contacts = () => {
  return (
    <div className={styles.contacts}>
       <img src={smail} alt="" />
      <h1>У вас нет заказов</h1>
      <h2>Вы нищеброд? <br />
       Оформите хотя бы один заказ.</h2>
       <button>Вернуться назад</button>
    </div>
  )
}

export default Contacts