import React from 'react'
import { Container , Row , Col } from 'react-bootstrap'

const AboutUs = () => {
  return (
    
    <>
    {/* start_section_ABOUT */}
    <section  className='section_ABOUT' >
          <Container>
            <div className='heding_section3'>
            <h1>ABOUT SMART GYM</h1>
            <h6>We’re not just a gym with the latest equipment,
               we also provide you with various classes that will help you achieve your fitness goals.
            </h6>
            </div>
          <Row>
            <Col md={6} sm={12}>
               <div className='section3_div'>
                <div>
                  <a href="/#"><i class="fa-sharp fa-solid fa-child-reaching"></i></a>
                </div>
                <div className='titiel_div'>
                <h5>BODY TRANSFORMATION</h5>
                <p>Helping you achieve your weight loss and muscle goals </p>
                </div>
               </div>
               <div className='section3_div'>
                <div>
                  <a href="/#"><i class="fa-sharp fa-solid fa-users"></i></a>
                </div>
                <div className='titiel_div'>
                <h5>FLEXIBLE MEMBERSHIPS</h5>
                <p>Offering you various packages that suit you best.</p>
                </div>
               </div>
               <div className='section3_div'>
                <div>
                  <a href="#"><i class="fa-solid fa-shield-halved"></i></a>
                </div>
                <div className='titiel_div'>
                <h5>ALWAYS INNOVATIVE</h5>
                <p>Providing you with the top-notch classes and newest.</p>
                </div>
               </div>
              </Col>
              <Col md={6} sm={12}>
              <div className='section3_div'>
                <div>
                  <a href="/#"><i class="fa-solid fa-sheet-plastic"></i></a>
                </div>
                <div className='titiel_div'>
                <h5>TRUE EXPERTISE</h5>
                <p>Our trainers are highly qualified and know what they’re .</p>
                </div>
               </div>
               <div className='section3_div'>
                <div>
                  <a href="#"><i class="fa-brands fa-wordpress"></i></a>
                </div>
                <div className='titiel_div'>
                <h5>FAMILY FUN</h5>
                <p>We have something for your family to do when you’re .</p>
                </div>
               </div>
               <div className='section3_div'>
                <div>
                  <a href="#"><i class="fa-thin fa-envelope"></i></a>
                </div>
                <div className='titiel_div'>
                <h5>NEWEST OF THE NEW</h5>
                <p>Our classes are always fresh and so is our equipment! You’ll .</p>
                </div>
               </div>
              </Col>
          </Row>
          </Container>


     </section>
     
    {/* end_section_ABOUT */}
    </>

  )
} 

export default AboutUs