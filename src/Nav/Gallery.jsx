import React from 'react'
import { Container , Row , Col } from 'react-bootstrap'

const Gallery = () => {
  return (
    <>
        {/* start_section5GALLERY */}

        <section className='section_GALLERY'>
      <Container>
        <div><h3>GALLERY</h3></div>
          <Row>
            <Col md={4} sm={12}>
              <div>
                <img className='GALLERY_img' src="\images\pexels-saifuddin-ratlamwala-3850526.jpg" alt="" />
              </div>
              <div>
              <img className='GALLERY_img' src="\images\pexels-richard-verbeek-572861.jpg" alt="" />
              </div>
            </Col>
            <Col md={4} sm={12}>
            <div>
                <img className='GALLERY_img' src="\images\pexels-cottonbro-studio-7674484.jpg" alt="" />
              </div>
              <div>
              <img className='GALLERY_img' src="\images\pexels-dom-j-297494.jpg" alt="" />
              </div>
            </Col>
            <Col md={4} sm={12}>
            <div>
                <img className='GALLERY_img' src="\images\pexels-artūras-kokorevas-2290786.jpg" alt="" />
              </div>
              <div>
              <img className='GALLERY_img' src="\images\pexels-ketut-subiyanto-4720309.jpg" alt="" />
              </div>
            </Col>
          </Row>
      </Container>
    </section>

    {/* end_section5GALLERY */}
    </>
  )
}

export default Gallery