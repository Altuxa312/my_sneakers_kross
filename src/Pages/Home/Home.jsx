import React, { useState } from 'react'
import Content from '../../Components/Content/Content'
import Search from '../../Components/Search/Search'
import Sneaker from '../../Components/Sneaker/Sneaker'
import styles from './Home.module.scss'
const HOME = ({ data, setText, text }) => {
  return (
    <div>
      <Content />
      <Search setText={setText} text={text}/>
      
      <div style={{ display: 'flex', justifycontent: 'space-between', flexWrap: 'wrap' }}>
        {data.map(item => (
          <Sneaker item={item} key={item.id}/>
        ))}
      </div>
    </div>
  )
}

export default HOME