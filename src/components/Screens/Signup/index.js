import React from 'react'
import { Container, Button } from '@mui/material'
import Textfield from '../../common/Textfield'
import './style.css'
export default function Signup() {
  return (
    <Container className="container">
    <div className="entry-form">
      <div className="form">
        <h1>Sign-Up page</h1>
        <Textfield placeholder="User Name" />
        <Textfield placeholder="E-mail ID" />
        <Textfield placeholder="Password" />
        <Textfield placeholder="Re-type Password" />
        <Button type="submit" className="submit-btn">Sign Up</Button>
      </div>
    </div>
  </Container>
  )
}
