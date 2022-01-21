import React, { useState, useEffect } from 'react'
import io from 'socket.io-client'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const socket = io('http://localhost:4741', {
  withCredentials: true
})

function Chat ({ user }) {
  const [state, setState] = useState({ message: '', name: user.email })
  const [chat, setChat] = useState([])

  useEffect(() => {
    socket.on('message', ({ name, message }) => {
      setChat([...chat, { name, message }])
    })
    console.log('user ', user)
  })

  const handleChange = event => {
    setState({ ...state, [event.target.name]: event.target.value })
    console.log('name ', event.target.name, '  val ', event.target.value)
  }

  const onMessageSubmit = event => {
    event.preventDefault()
    const { name, message } = state
    socket.emit('message', { name, message })
    setState({ message: '', name })
  }

  const renderChat = () => {
    return chat.map(({ name, message }, index) => (
      <div key={index}>
        <h3>
          {name}: <span>{message}</span>
        </h3>
      </div>
    ))
  }

  return (
    <div className='row'>
      <div className='col-sm-10 col-md-8 mx-auto mt-5'>
        <h3>Messenger</h3>
        <Form onSubmit={onMessageSubmit}>
          <Form.Group controlId='message'>
            <Form.Label>Message</Form.Label>
            <Form.Control
              required
              type='text'
              name='message'
              value={state.message}
              placeholder='Enter message'
              onChange={e => handleChange(e)}
            />
          </Form.Group>
          <Button variant='primary' type='submit'>Submit</Button>
        </Form>
        <div>
          {renderChat()}
        </div>
      </div>
    </div>
  )
}

export default Chat
