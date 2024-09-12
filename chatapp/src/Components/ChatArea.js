import React from 'react'
import "./myStyle.css"
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import MessageOther from './MessageOther';
import MessageSelf from './MessageSelf';
const ChatArea = ({name, timeStamp}) => {
    return (
        <div className='chatArea-container'>
            <div className='chatArea-header'>
                <p className='con-icon'>{name ? name[0] : " "}</p>
                <div className='header-text'>
                    <p className='con-title'>{name}</p>
                    <p className='con-timeStamp'>{timeStamp}</p>
                </div>
                <IconButton>
                    <DeleteIcon/>
                </IconButton>
            </div>
            <div className='message-container'>
                <MessageOther/>
                <MessageSelf/>
                
                <MessageOther/>
                <MessageSelf/>

                <MessageOther/>
                <MessageSelf/>
                 </div>
            <div className='text-input-area'>
                <input placeholder='Type a message' className='search-box'/>
                <IconButton>
                    <SendIcon/>
                </IconButton>
                 </div>
        </div>
    )
}

export default ChatArea
