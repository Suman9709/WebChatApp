import React from 'react'
import "./myStyle.css"
import logo from "../Image/logolivechat.png"
const Welcome = () => {
  return (
    <div className='welcome-container'>
        <img src={logo} alt='Logo' className='welcome-logo'/>
        <p>View and text directly to people present in chat room</p>
      
    </div>
  )
}

export default Welcome
