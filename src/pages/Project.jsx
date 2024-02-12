import React, { useEffect, useState } from 'react'
import ProjectCard from '../components/ProjectCard'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { getAllProjectAPI } from '../services/allAPIs';
import { all } from 'axios';

function Project() {
  const [allProject, setAllProject] = useState([])//to hold all project
  //api call
  const allProjects = async () => {
    //get token from sessionstorage
    const token = sessionStorage.getItem("token");

    if (token) {
      const reqHeader = {
        'Content-Type': 'multipart/form-data',
        "Authorization": `Bearer ${token}`
      }
      try {
        const result = await getAllProjectAPI(reqHeader);
        console.log(result);
        if (result.status === 200) {
          setAllProject(result.data);
          console.log(allProject);
        }
        else {
          alert('failed to retrieve project')
        }
      } catch (error) {
        console.error('Error fetching project : ', error);
        alert('failed to retrieve project')
      }
    }
  }


  useEffect(() => {
    allProjects()
  }, [])

  return (
    <div>
      <div className="container">
        <h1 className='text-center m-4'>All Projects</h1>
        <div className='d-flex justify-content-center w-100'>
          <div className='d-flex border border-4 bg-light mb-5'>
            <input type="text" className='form-control' placeholder='Search By Name' />
            <i className="fa-solid fa-magnifying-glass text-dark fs-3 p-2"></i>
          </div>
        </div>
        <Row>
          {allProject.length > 0 ? (
            allProject.map((item, index) => (
              <Col key={index}>
                <ProjectCard project={item} />
              </Col>
            ))
          ):(
            <div className="text-center">No project found</div>
          )}
        </Row>
      </div>
    </div>
  )
}

export default Project