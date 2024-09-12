import React from 'react'
import "./myStyle.css"

const MessageSelf = () => {
    var prop2 = { name: "You", message: "This is a sample message" }
    return (
        <div className='self-message-container'>
            <div className='messageBox'>
                <p>{prop2.message}</p>
                <p className='self-timeStamp'>12:00am</p>
            </div>
        </div>
    )
}

export default MessageSelf
