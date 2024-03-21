import React, { useEffect, useState } from 'react'
import TitleImage from '../Assets/lsQS6q92QV.gif'
import ProjectCard from '../components/ProjectCard'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom'
import { getHomeProjectAPI } from '../services/allAPIs';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';

function Home() {

  //to hold 3 home projects details
  const [homeProject, setHomeProject] = useState({})

  //Api call to get home project details from the mongodb
  const getHomeProject = async () => {
    const result = await getHomeProjectAPI()
    console.log(result);
    if (result.status == 200) {
      setHomeProject(result.data)//array of projects
    }
    else {
      console.log(result.response.message);
    }
  }
  console.log(homeProject);

  useEffect(() => {
    getHomeProject()
  }, [])

  return (
    <div>
      <MDBNavbar light bgColor='light'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='/'>
            <img
              className='logo ms-3'
              src='https://www.theprojectilkeston.co.uk/wordpress/wp-content/uploads/2017/01/The-Project-Logo.jpg'
              height='120px'
              alt=''
            />
            FAIR
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <h2 className='text-center m-5 mt-5'>THE PROJECT FAIR</h2>
            <p>Project management is the use of specific knowledge, skills, tools and techniques to deliver something of value to people.The development of software for an improved business process, the construction of a building, the relief effort after a natural disaster, the expansion of sales into a new geographic market—these are all examples of projects.</p>
            <div className='text-center'>
              <Link to={'/login'}>
                <button className='btn btn-outline-dark btn-lg m-3 rounded-pill shadow'>Get Started</button>
              </Link>
            </div>
          </div>
          <div className="col-6">
            <img className='ms-5 mb-3' style={{ height: '450px', width: '95%' }} src={TitleImage} alt="" />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h2 className='text-center m-4'>Explore Our Projects</h2>
            <marquee>
              <div>
              <Row>
                {
                  homeProject.length > 0 ? homeProject?.map((item) => (
                    
                      <Col>
                        <ProjectCard project={item} />
                      </Col>
                    
                  )):"empty"
                  }
                  </Row>
              </div>
            </marquee>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home