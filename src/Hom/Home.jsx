import React from 'react'
import { Container , Row , Col } from 'react-bootstrap'
import {HashLink} from "react-router-hash-link"

const Home = () => {

  return (
<>



{/*  */}


{/* start_ColHome */}
    <section className='ColHome'>
        <Container>
            <Row>
              <Col md={6} sm={12}>
                <h1>
                  MEN CLASSES
                </h1>
                <p>
                It’s not only the shape of your body that’
                s important; your health is, too. Our variety
                 of exercise classes allows your body to reflect 
                 on your health on the inside and out. The energy
                 in the  is the perfect way to stay motivated
                 to accomplish your health goals in a fun way!
                </p>
                <button>JOIN NOW</button>

            
              </Col>
  
              <Col md={6} sm={12}>
                <h1>
                 LADIES CLASSES
                </h1>
                <p>
                    Stay healthy from the inside out.
                    Let nothing stop you even if it's
                    pregnancy or recently having a baby.
                    Our classes are full of variety and energy!                    The motivation is always alive!
                    Get in shape and become healthier the fun way!
                </p>
                <button>
                JOIN NOW
                </button>
                </Col>
            </Row>
  
        </Container>
    {/* imggg */}
        <Container>
          <Row>
            <Col md={6} sm={12}>
              <img className='imgHome' src="\images\pexels-jonathan-borba-13896072.jpg" alt="" />
            </Col>
            <Col md={6} sm={12}>
              <img className='imgHome' src="\images\pexels-monstera-production-6999241.jpg" alt="" />
            </Col>
          </Row>
        </Container>
    </section>
    {/* imggg */}


    {/* end_ColHome */}



   {/* start_Colsection2  */}

   <section className='Colsection2'  >
          <Container>

            <div className='titel'>
            <h1>BRANCH CLASS SCHEDULES </h1>
            <h3>Check ut the class schedules of your nearest branch!. </h3>
            </div>
            <Col md={12} sm={12}>
              <video className='videoGym' src='\images\pexels-shvets-production-8059616 (2160p).mp4' autoPlay loop muted controls></video>
            </Col> 
         </Container>
        </section>

    {/* end_Colsection2 */}

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
                <p>Helping you achieve your weight loss and muscle goals.</p>
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
                <p>Providing you with the top-notch classes and newest equipment.</p>
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
                <p>Our trainers are highly qualified and know what they’re doing.</p>
                </div>
               </div>
               <div className='section3_div'>
                <div>
                  <a href="#"><i class="fa-brands fa-wordpress"></i></a>
                </div>
                <div className='titiel_div'>
                <h5>FAMILY FUN</h5>
                <p>We have something for your family to do when you’re at our branches.</p>
                </div>
               </div>
               <div className='section3_div'>
                <div>
                  <a href="#"><i class="fa-thin fa-envelope"></i></a>
                </div>
                <div className='titiel_div'>
                <h5>NEWEST OF THE NEW</h5>
                <p>Our classes are always fresh and so is our equipment! You’ll always stay excited and motivated.</p>
                </div>
               </div>
              </Col>
            </Row>
          </Container>


     </section>
    {/* end_section_ABOUT */}

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

    {/* start location */}

    <section className='location'>
      <Container>
        <Row>
          <Col md={4} sm={4}>
            <h6>Copyright © 2022 Smart Gym Developed by TMS</h6>
            <a href=""><i class="fa-brands fa-facebook"></i></a>
            <a href=""><i class="fa-brands fa-instagram"></i></a>
            <h6>Privacy Policy</h6>
          </Col>
          <Col md={4} sm={4}>
            <h6>Ladies location</h6>
          <a href="#"> Nasr City Ladies Branch</a>
            <p>  Phone: 01022636156 - 02 26701288</p>
            <a href="#"> Nasr City Ladies Branch</a>
            <p>  Phone: 01022636156 - 02 26701288</p>
            <a href="#"> Nasr City Ladies Branch</a>
            <p>  Phone: 01022636156 - 02 26701288</p>
            <a href="#"> Nasr City Ladies Branch</a>
            <p>  Phone: 01022636156 - 02 26701288</p>
            <a href="#"> Nasr City Ladies Branch</a>
            <p>  Phone: 01022636156 - 02 26701288</p>

          </Col> 
          <Col md={4} sm={4}>
            <h6>Men location</h6>
            <a href="#">  Nasr City Men Branch</a>
            <p>  Phone: 01066637753 - 02 22877619</p>
            <a href="#">  Sheraton Men Branch</a>
            <p>  Phone: 01011487946 - 02 22672044</p>
            <a href="#"> New Cairo Men Branch</a>
            <p>  Phone: 01022636156 - 02 21945323</p>
            <a href="#">  Merghany Men Branch</a>
            <p>  Phone: 01022636156 - 02 39210432</p>
          </Col>       
        </Row>
      </Container>
    </section>

    {/* end location */}






    

</>
  )
}

export default Home
