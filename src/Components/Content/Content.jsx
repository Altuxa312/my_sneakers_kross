import React from 'react'
import styles from './Content.module.scss'
import img from '../../img/content.svg'
const Content = () => {
  return (
   <section className={styles.section}>
    <img src={img} alt="" />
   </section>
  )
}

export default Content