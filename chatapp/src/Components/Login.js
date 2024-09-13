import React from 'react'
import "./myStyle.css"
import logo from "../Image/logolivechat.png"
import { Button, TextField } from '@mui/material'

const Login = () => {
    return (
        <div className='login-container'>
            <div className='image-container'>
                <img src={logo} alt='logo' className='welcome-logo' />
            </div>
            <div className='login-box'>
                <p className="login-text">Login to your Account</p>
                <TextField id="standard-basic" label="Username" variant="outlined" />
                <TextField
                    id="standard-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    variant="outlined"
                />
                <Button variant="outlined">Login</Button>
            </div>
        </div>
    )
}

export default Login
