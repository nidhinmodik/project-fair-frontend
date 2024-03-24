import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { baseUrl } from '../services/baseUrl';


function ProjectCard({project}) {
    console.log(project);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <Card onClick={handleShow} style={{ width: '16rem',height:'25rem', boxShadow: '2px 5px 15px 2px', margin: '10px' }}>
                <Card.Img variant="top" style={{width:'16rem',height:'20rem'}} src={project?`${baseUrl}/uploads/${project.projectImage}`:"null"} />
                <Card.Body>
                    <Card.Title className='text-center'>{project?.title}</Card.Title>
                </Card.Body>
            </Card>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{project?.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <h3 className='text-center'>Project Details</h3>
                        <Col>
                        <img src={project?`${baseUrl}/uploads/${project.projectImage}`:"null"} width={'100%'} alt="" />
                        </Col>
                        <Col>
                        <h3>{project?.title}</h3>
                        <span><p> <b>Project Overview : </b>{project?.overview}</p></span>
                        <p>Language Used : <span> <b>{project?.language}</b></span></p>
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer className='d-flex justify-content-evenly'>
                    <a href='' variant="secondary">
                    <i class="fa-brands fs-2 fa-github fa-bounce text-dark"></i>
                    </a>
                    <a href='' variant="primary">
                    <i class="fa-solid fs-2 fa-link fa-bounce text-danger"></i>
                    </a>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default ProjectCard