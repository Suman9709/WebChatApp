import React from 'react'
import "./myStyle.css"
import CheckIcon from '@mui/icons-material/Check';
import { IconButton } from '@mui/material';

const CreateGroup = () => {
  return (
    <div className='createGroup-container'>
      <input placeholder='Enter Group name' className='search-box' />
      <IconButton>
        <CheckIcon />
      </IconButton>
    </div>
  )
}

export default CreateGroup
