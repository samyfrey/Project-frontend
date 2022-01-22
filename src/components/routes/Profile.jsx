import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import { createProfile } from '../../api/routes'
import { createProfileSuccess, createProfileFailure } from '../AutoDismissAlert/messages'

function Profile ({ msgAlert, user }) {
  const [userName, setUserName] = useState('')

  const onSubmitProfile = (event) => {
    event.preventDefault()

    createProfile(userName, user)
      .then(res => console.log(res))
      .then(() =>
        msgAlert({
          heading: 'Username Created Successfully',
          message: createProfileSuccess,
          variant: 'success'
        }))
      .catch(error => {
        setUserName('')
        msgAlert({
          heading: 'Username Creation Failed with error: ' + error.message,
          message: createProfileFailure,
          variant: 'danger'
        })
      })
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
