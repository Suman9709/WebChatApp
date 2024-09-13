import React from 'react'
import "./myStyle.css"
import Sidebar from './Sidebar'
import User_Groups from './User_Groups'
// import CreateGroup from './CreateGroup'
// import Welcome from './Welcome'
// import ChatArea from './ChatArea'
const MainContainer = () => {
  return (
    <div className='main-container'>
      {/* <h1>MainContainer</h1> */}
      <Sidebar/>
      {/* <Welcome/> */}
      {/* <CreateGroup/> */}
      {/* <Workarea/> */}
      {/* <ChatArea /> */}
      <User_Groups/>
    </div>
  )
}

export default MainContainer
