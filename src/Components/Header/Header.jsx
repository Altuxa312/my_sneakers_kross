import React from 'react'
import styles from './Header.module.scss'
import logo from '../../img/logo.svg'
import { ShoppingBasket, HeartBroken, AccountCircle } from '@mui/icons-material'
import {NavLink} from 'react-router-dom'


const Header = () => {
  return (
    <header className={styles.header}>
  <div className={styles.bashy}>
  <div className={styles.logo}>
    <NavLink to='/'>
    <img src={logo} alt="" />
    </NavLink>
      </div>
      <div className={styles.icon}>
<NavLink to='Basket'>
<ShoppingBasket className={styles.corzina}/>
</NavLink>
  <h3>2222</h3>
  <h3>СОМ</h3>
<div className={styles.icon_1}>

  <NavLink to='/About'>
    <HeartBroken className={styles.onas}/>
    </NavLink>
  <NavLink to='/Contacts'>  
  <AccountCircle className={styles.acc}/>
  </NavLink>


</div>
      </div> 
       </div>
    </header>
  )
}

export default Header