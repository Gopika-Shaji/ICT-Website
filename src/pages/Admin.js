import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import AdminPage from './AdminPage';

const Admin = () => {


    const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  function validateForm() {

    return email.length > 0 && password.length > 0;

  }
  function handleSubmit(event) {

    event.preventDefault();

  }



  return (
    <div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      <Typography variant='h5'>Login</Typography>
      <div className="Login">

<Form onSubmit={handleSubmit}>

  <Form.Group size="lg" controlId="email">

    <Form.Label>Email</Form.Label>

    <Form.Control

      autoFocus

      type="email"

      value={email}

      onChange={(e) => setEmail(e.target.value)}

    />

  </Form.Group>

  <Form.Group size="lg" controlId="password">

    <Form.Label>Password</Form.Label>

    <Form.Control

      type="password"

      value={password}

      onChange={(e) => setPassword(e.target.value)}

    />

  </Form.Group>

  <Link to='/admindashboard' element={<AdminPage />} ><Button block size="lg" type="submit" disabled={!validateForm()}>

    Login

  </Button></Link>

</Form>

</div>
    </div>
  )
}

export default Admin;