import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Myproject from '../components/Myproject';
import Myprofile from '../components/Myprofile';
import { Link } from 'react-router-dom';
import Header from '../components/Header';


function Dashboard() {
  const existingUser = JSON.parse(sessionStorage.getItem('existingUser'))
  console.log(existingUser);
  return (
    <div>
      <Header/>
      <div>
        <Row>
          <h2 className='ms-5 mt-5'>Welcome <span className='text-primary'>{existingUser.username}</span></h2>
          <Col>
          {/* my projects */}
          <Myproject/>
          </Col>
          <Col>
          {/* my profile */}
          <Myprofile/>
          </Col>
        </Row>
        <Row>
          <Col>
          <Link to={'/project'}>
          <div className='text-center'>
            <button className='btn btn-outline-dark btn-lg m-5 rounded-pill shadow'>View Projects</button>
          </div>
        </Link>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Dashboard