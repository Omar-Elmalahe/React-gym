import React from 'react'
import { Container , Row , Col } from 'react-bootstrap'

const UsClasses = () => {
  return (
    <>
          {/* start_section4CLASSES */}

    <section className='section_CLASSES'>
      <Container>
        <div className='heding_4'>
          <h1>TRENSFROM GYM CLASSES</h1>
          <p>Our classes are a fun way to lose weight and get in shape fast.</p>
          <button>All class</button>
        </div>
        <Row>
        <Col md={4} sm={12}>
          <div className='div_Classes'>
            <img className='img_Classes' src="\images\pexels-prasanth-inturi-1051838.jpg" alt="" />
            <h5>YOGE</h5>
          </div>
          <div className='div_Classes'>
            <img className='img_Classes' src="\images\pexels-jonathan-borba-13896072.jpg" alt="" />
            <h5>SPININNG</h5>
          </div>

        </Col>
        <Col md={4} sm={12}>
        <div className='div_Classes'>
            <img className='img_Classes' src="\images\pexels-annushka-ahuja-7991644.jpg" alt="" />
            <h5>BOXING</h5>
          </div>
          <div className='div_Classes'>
            <img className='img_Classes' src="\images\pexels-kate-trysh-4090012.jpg" alt="" />
            <h5>ZUMBE</h5>
          </div>

        </Col>
        <Col md={4} sm={12}>
        <div className='div_Classes'>
            <img className='img_Classes' src="\images\pexels-andrea-piacquadio-3837429.jpg" alt="" />
            <h5>ABS</h5>
          </div>
          <div className='div_Classes'>
            <img className='img_Classes' src="\images\pexels-karolina-grabowska-4964542.jpg" alt="" />
            <h5>TYMITE</h5>
          </div>

        </Col>
        </Row>
      </Container>
    </section>

    {/* end_section4CLASSES */}
    </>
  )
}

export default UsClasses