import React from 'react'
import styles from './Basket.module.scss'
import korob from '../../img/image 8.svg'
const Basket = () => {
  return (
    <div className={styles.basket}>
     <img src={korob} alt="" />
     <h1>Корзина пустая</h1>
     <h2>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</h2>
     <button>Вернуться назад</button>
    </div>
  )
}

export default Basket