import React from 'react'
import {Container , Nav , Navbar , Col } from 'react-bootstrap'
import { HashLink } from 'react-router-hash-link';
import { NavLink } from 'react-router-dom';
const Navbarr = () => {
  return (

    <>
    <Navbar className='Navbar' bg="dark" data-bs-theme="dark">
    <Container >
        <NavLink className='hading' to="/"> <h1>Transform</h1></NavLink>
        <Nav className='navlinks justify-content-end'>
        <Col md={12} sm={12}>

          <HashLink className='Active' to='/#Home'>Home</HashLink>
          <HashLink to='/AboutUs'>About Us</HashLink>
          <HashLink to='/UsClasses'> UsClasses</HashLink>
          <HashLink to='/Gallery'>Gallery</HashLink>
          <HashLink to='/Schedule'>Schedule</HashLink>
          <HashLink to='/Contactus'>Contact us</HashLink>
          </Col>

        </Nav>

    </Container>
    </Navbar >  

     </>
  )
}

export default Navbarr