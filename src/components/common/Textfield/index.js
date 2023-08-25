import React from 'react'
import TextField from '@mui/material/TextField';
import './style.css'
export default function Textfield(props) {
  return (
    <>
        <TextField id="outlined-basic" placeholder={props.placeholder} className='inputbox'  />
    </>
  )
}
