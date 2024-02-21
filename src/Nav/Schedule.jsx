import React from 'react'
import { Container , Row , Col } from 'react-bootstrap'

const Schedule = () => {
  return (
    <>
    {/* start Schedule */}
    <section className='Schedule'>
    <Container>
        <Row>
        <Col md={4} sm={12}>
            <h3>CONTACT US</h3>
            <a href=""><i class="fa-solid fa-house"></i></a>
            <p>SMART GYM - HEAD OFFICE</p>
            <a href=""><i class="fa-solid fa-earth-americas" ></i></a>
            <p>WEBSITE</p>
            <a href=""><i class="fa-solid fa-phone-volume"></i></a>
            <p>(02)01010721726</p>
        </Col>
          <Col md={4} sm={12}>
            <h3> WE'D LOVE TO HEAR FROM YOU</h3>
            <p>
               If you have any complains that you would
               like to tell us about, we are all ears and are ready
               to help make things better for you and the rest
               of our fellow athletes.
            </p>
            <textarea name="complain" placeholder='you have any complains?' id="complain" cols="30" rows="5">
            </textarea>

           <button className='buttontextarea'>SANDCOMBLIAN</button>
          </Col>
          <Col className='conucte' md={4} sm={12}>
            <h3>SUBSCRIBE</h3>
            <p>Sign up with your contact information and receive our latest 
              offers and news! Leave your phone number & We will call you for latest offers.
            </p>
            <input type="name" name='[]' placeholder='NAME' />


            <div className='finel'>
              <p>Gender: </p>
              <p> MALE</p>
              <input type="radio" />
              <p>FAMLE</p>
              <input type="radio" />
              </div>
              <input type="phone" name='phone' placeholder='Phone Number*' />
              <textarea cols="30" rows="2" placeholder='Your Message'>

              </textarea>
       

          </Col>
        </Row>
      </Container>
    </section>
    {/* end Schedule */}
    </>
  )
}

export default Schedule