import { ListItem } from '@mui/material'
import React from 'react'
import styles from './Sneaker.module.scss'
import checkimg from '../../img/Group 91.svg'
import Checkinimg from '../../img/Group 95.svg'
import heardimg from '../../img/Group 90.svg'
import heartimg from '../../img/Group 90 (1).svg'
import { useState, useEffect } from 'react'
const Sneaker = ({ item }) => {
  const [like, setLike] = useState(false)
  function likeClick() {
    setLike(!like)
  }
  const [check, setCheck] = useState(false)
  function handleClick() {
    setCheck(!check)
  }
  return (
    <div className={styles.content}>
  <div className={styles.sss}>
  <div className={styles.block}>
          <img className={styles.likes}
            style={{ width: '30px' }}
            onClick={likeClick}
            src={like ? heartimg : heardimg} 
            alt="chek" />
  <img src={item.image} alt="" />
          <h3>{item.name}</h3>
          <h5>цена:{item.price}</h5>
          <img className={styles.plus}
            style={{ width: '30px' }}
            onClick={handleClick}
            src={check ? Checkinimg : checkimg }
            alt="check" />
        </div>
  </div>
    </div>
  )
}

export default Sneaker