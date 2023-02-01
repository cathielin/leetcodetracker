import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useAuth } from '../config/authContext'

const Signup = () => {
  const { user, signup, update } = useAuth()
  const [data, setData] = useState({
    email: '',
    firstName: '',
    password: '',
    
  })

  const handleSignup = async (e) => {
    e.preventDefault()

    try {
      await signup(data.email, data.password)
      await update(data.firstName)
    } catch (err) {
      console.log(err)
    }

    console.log(data)
  }

  return (
    <div
      style={{
        width: '40%',
        margin: 'auto',
      }}
    >
      <h1 className="text-center my-3 ">Signup</h1>
      <Form onSubmit={handleSignup}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            required
            onChange={(e) =>
              setData({
                ...data,
                email: e.target.value,
              })
            }
            value={data.email}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>first name</Form.Label>
          <Form.Control
            type="input"
            placeholder="Enter first name"
            required
            onChange={(e) =>
              setData({
                ...data,
                firstName: e.target.value,
              })
            }
            value={data.firstName}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            required
            onChange={(e) =>
              setData({
                ...data,
                password: e.target.value,
              })
            }
            value={data.password}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Signup
        </Button>
      </Form>
    </div>
  )
}

export default Signup