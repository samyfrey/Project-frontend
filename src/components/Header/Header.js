import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link, NavLink } from 'react-router-dom'
import { Button } from './../styles/Button.styled'

const authenticatedOptions = (
  <Fragment>
    <NavLink to='/profile' className='nav-link'>Profile</NavLink>
    <NavLink to='/change-password' className='nav-link'>Change Password</NavLink>
    <NavLink to='/chat' className='nav-link'>Chat</NavLink>
    <NavLink to='/sign-out' className='nav-link'>Sign Out</NavLink>
    <NavLink to='/chat'>
      <Button>Chat Now</Button>
    </NavLink>
  </Fragment>
)

const unauthenticatedOptions = (
  <Fragment>
    <NavLink to='/sign-up' className='nav-link'>Sign Up</NavLink>
    <NavLink to='/sign-in' className='nav-link'>Sign In</NavLink>
  </Fragment>
)

const alwaysOptions = (
  <Fragment>
    <NavLink exact to='/' className='nav-link'>Home</NavLink>
  </Fragment>
)

const Header = ({ user }) => (
  <Navbar className='color-nav' expand='md'>
    <Navbar.Brand>
      <img
        alt='MSN'
        src='https://www.clipartmax.com/png/full/83-836045_msn-boneco-logo-vector-msn-messenger-logo-png.png'
        width='30'
        height='30'
      />
      <Link to='/' style={{ color: 'rgb(20, 48, 142)', textDecoration: 'none', margin: '2rem' }}>

Chatter Box
      </Link>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls='basic-navbar-nav' />
    <Navbar.Collapse id='basic-navbar-nav'>
      <Nav className='ml-auto'>
        {user && (
          <span className='navbar-text mr-2'>Welcome, {user.email}</span>
        )}
        {alwaysOptions}
        {user ? authenticatedOptions : unauthenticatedOptions}
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Header
