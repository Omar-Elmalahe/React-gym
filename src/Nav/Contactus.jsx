import React , {useState}from 'react'
import { Container , Row , Col } from 'react-bootstrap'
const Contactus = () => {

    const [formData, setFormData] = useState({
      name: '',
      email: '',
      age: '',
      gender: '',
      mobile: '',
      address: '',
      classType: '',
    });
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // يمكنك هنا إضافة العمليات التي تحدث عند تقديم النموذج
      console.log(formData);
    };
  
    return (
      <div className='login'>
        
      <form className='from'  action="http://localhost/gym1/register.php" method="post">
        <Container className='Container'>
          <Row>
        <Col md={3} sm={3}>
          <h1> Login User</h1>
        </Col>
        <Col md={9} sm={9}>
            <input type="text" name="name" placeholder='Name:' value={formData.name}  onChange={handleChange}/>
            <div className='inputs'>
            <input type="email" name="email" placeholder='Email:' value={formData.email} onChange={handleChange}/>
            <input type="number" name="age"  placeholder='Age:'  value={formData.age}onChange={handleChange}  />
            <input type="number" name="k"  placeholder='k:'  value={formData.k}onChange={handleChange}  />
            <input type="number" name="sm"  placeholder='sm:'  value={formData.sm}onChange={handleChange}  />
            </div>
            <input  type="text" name="gender" placeholder='Gender' value={formData.gender} onChange={handleChange} />
            <input type="tel" name="mobile" placeholder='Phone' value={formData.mobile} onChange={handleChange} />
            <input type="text"name="address" placeholder='Address' value={formData.address} onChange={handleChange}/>
            <select name="classType" placeholder='Class Type' value={formData.classType} onChange={handleChange}>
              <option value="f">Fitness</option>
              <option value="d">Diet</option>
              <option value="b">Body Building</option>
              <option value="p">Physical Therapy</option>
            </select>
            <br />
          <button type="submit">Register</button>
        </Col>

        </Row>
        </Container>
      </form>

      </div>
    );
  };
  


export default Contactus