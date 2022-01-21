import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import submitProfile from '../../api/profile'

const Profile = () => {
  const [userName, setUserName] = useState('')

  const onSubmitProfile = (event) => {
    event.preventDefault()

    submitProfile(userName)
      .then(res => console.log(res))
      .catch(console.error)
  }

  const handleChange = ({ target }) => {
    setUserName(target.value)
  }

  return (
    <div className='row'>
      <div className='col-sm-10 col-md-8 mx-auto mt-5'>
        <h3>Profile</h3>
        <Form onSubmit={onSubmitProfile}>
          <Form.Group controlId='email'>
            <Form.Label>User name</Form.Label>
            <Form.Control
              required
              type='text'
              name='username'
              value={userName}
              placeholder='Enter UserName'
              onChange={handleChange}
            />
          </Form.Group>
          <Button variant='primary' type='submit'>Submit</Button>
        </Form>
      </div>
    </div>
  )
}

export default Profile
