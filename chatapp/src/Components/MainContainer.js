import React from 'react'
import "./myStyle.css"
import Sidebar from './Sidebar'

import ChatArea from './ChatArea'
const MainContainer = () => {
  return (
    <div className='main-container'>
      {/* <h1>MainContainer</h1> */}
      <Sidebar/>
      {/* <Workarea/> */}
      <ChatArea  />
    </div>
  )
}

export default MainContainer
